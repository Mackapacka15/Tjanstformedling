<script lang="ts" setup>
import SortListComponent from "./SortListComponent.vue";
import { defineComponent } from "vue";
import { store } from "./store";
import { Listing } from "./interface";
import FilterBar from "./FilterBar.vue";
import {
  getDocs,
  onSnapshot,
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
    <li v-for="people in peopleListFiltered">
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
      peopleListFiltered: [] as Array<Listing>,
    };
  },
  methods: {
    sortRating(): void {
      this.peopleListFiltered.sort((n1, n2) => {
        if (n1.rating > n2.rating) {
          return 1;
        }
        if (n1.rating < n2.rating) {
          return -1;
        }
        return 0;
      });
    },
    applyFilters() {
      console.log("Filter");
      //To make sure it's empty
      this.peopleListFiltered = [] as Array<Listing>;

      console.log("people list", this.peopleList);
      console.log("filter", store.filters[0]);

      this.peopleListFiltered = this.peopleList.filter((listing: Listing) => {
        return (
          listing.occupation.find((occ: String) => {
            return (
              store.filters.find((filter) =>
                occ.toLowerCase().includes(filter.toLowerCase() as string)
              ) !== undefined
            );
          }) !== undefined
        );
      });

      console.log("People Filtered");

      console.log(this.peopleListFiltered);
    },
    sortName(): void {
      this.peopleListFiltered.sort((a: Listing, b: Listing) =>
        a.name.localeCompare(b.name as string)
      );
    },
    sortNameReverse(): void {
      this.sortName();
      this.peopleListFiltered.reverse();
    },
    sortRatingReverse(): void {
      this.sortRating();
      this.peopleListFiltered.reverse();
    },
  },
  computed: {},
  async created() {
    console.log("Created");

    let snapshot = await getDocs(
      this.colRef as unknown as CollectionReference<DocumentData>
    ).catch((error) => console.log(error));

    if (!snapshot) return;

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

    onSnapshot(
      this.colRef as unknown as CollectionReference<DocumentData>,
      (snapshot) => {
        this.peopleList = [];
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
      }
    );

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
