<script lang="ts" setup>
import SortListComponent from "./SortListComponent.vue";
import { defineComponent } from "vue";
import { store } from "./store";
import { Listing } from "./interface";
import FilterBar from "./FilterBar.vue";
import {
  getDocs,
  type CollectionReference,
  type DocumentData,
} from "firebase/firestore";
</script>

<template>
  <FilterBar
    :showFilters="true"
    @sortRating="sortRating()"
    @sortRatingReverse="sortRatingReverse()"
    @sortName="sortName()"
    @sortNameReverse="sortNameReverse()"
    @applyFilters="applyFilters()"
  />
  <ul>
    <li v-for="people in peopleListFilterd">
      <SortListComponent
        :name="people.name"
        :occupations="people.occupation"
        :aboutMe="people.aboutMe"
        :rating="people.rating"
      />
    </li>
  </ul>
</template>

<script lang="ts">
export default defineComponent({
  inject: ["g_colRef"],
  data() {
    return {
      colRef: this.g_colRef,
      store,
      peopleList: [] as Array<Listing>,
      peopleListFilterd: [] as Array<Listing>,
      filters: store.filters,
    };
  },
  methods: {
    sortRating(): void {
      console.log(this.peopleList);
      this.peopleListFilterd.sort((n1, n2) => {
        if (n1.rating > n2.rating) {
          return 1;
        }
        if (n1.rating < n2.rating) {
          return -1;
        }
        return 0;
      });
    },
    newFilters(newFilters: Array<String>) {
      this.filters = newFilters.map((a) => a.toLocaleLowerCase());
      console.log(this.filters);
      this.applyFilters();
    },
    applyFilters() {
      console.log("Filter");
      //To make sure it's empty
      this.peopleListFilterd = [] as Array<Listing>;
      console.log(this.filters);
      this.peopleListFilterd = this.peopleList.filter((person: Listing) => {
        return (
          person.occupation.find((occ: String) => {
            return (
              this.filters.find((filter) =>
                occ.toLowerCase().includes(filter as string)
              ) !== undefined
            );
          }) !== undefined
        );
      });
      console.log(this.peopleListFilterd);
    },
    sortName(): void {
      this.peopleListFilterd.sort((a: Listing, b: Listing) =>
        a.name.localeCompare(b.name as string)
      );
    },
    sortNameReverse(): void {
      this.sortName();
      this.peopleListFilterd.reverse();
    },
    sortRatingReverse(): void {
      this.sortRating();
      this.peopleListFilterd.reverse();
    },
    updatePeople() {
      console.log("UpdatePeopleFirebase");
      this.peopleList = [];
      getDocs(this.colRef as unknown as CollectionReference<DocumentData>)
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            this.peopleList.push(
              new Listing(
                doc.data().name,
                doc.data().occupation,
                doc.data().aboutMe,
                doc.data().rating
              )
            );
          });
        })
        .catch((error) => console.log(error));
    },
  },
  computed: {},
  created() {
    console.log("Created");
    this.updatePeople();
    this.applyFilters();
  },
});
</script>

<style scoped>
ul {
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  justify-content: center;
}
li {
  margin: 1rem;
}
</style>
