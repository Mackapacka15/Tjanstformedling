import { reactive, onMounted } from "vue";
import type { Person } from "./interface";
import people from "../data/people.json";
import { onAuthStateChanged } from "firebase/auth";

export const store = reactive({
  filters: [] as Array<String>,
  newFilters(newFilters: Array<String>) {
    this.filters = newFilters.map((a) => a.toLocaleLowerCase());
  },
  peopleListFilterd: [] as Array<Person>,
  applyFilters() {
    console.log("filter");
    //To make sure it's empty
    this.peopleListFilterd = [] as Array<Person>;
    this.peopleListFilterd = this.peopleList.filter((person: Person) => {
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
  },
  sortRating(): void {
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
  sortName(): void {
    this.peopleListFilterd.sort((a: Person, b: Person) =>
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
  peopleList: people as Array<Person>,
});
