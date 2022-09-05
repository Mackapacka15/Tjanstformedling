import { reactive } from "vue";
import type { Person } from "./interface";
import people from "../data/people.json";

export const store = reactive({
  filters: [] as Array<String>,
  newFilters(newFilters: Array<String>) {
    this.filters = newFilters;
  },
  peopleListFilterd: [] as Array<Person>,
  applyFilters() {
    this.peopleListFilterd = [] as Array<Person>;
    this.peopleList.forEach((element) => {
      element.occupation.forEach((occ) => {
        if (this.filters.includes(occ)) {
          this.peopleListFilterd.push(element);
        }
      });
    });
  },
  sortRating() {
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
  sortRatingReverse() {
    this.sortRating();
    this.peopleListFilterd.reverse();
  },
  peopleList: people as Array<Person>,
});
