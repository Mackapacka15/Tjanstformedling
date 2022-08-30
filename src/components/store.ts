import { reactive } from "vue";
import type { person } from "./interface";

export const store = reactive({
  filters: [] as Array<String>,
  newFilters(newFilters: Array<String>) {
    this.filters == newFilters;
  },
  peopleListFilterd: [] as Array<person>,
  applyFilters() {
    this.peopleListFilterd = [] as Array<person>;
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
  peopleList: [
    {
      name: "Markus",
      occupation: ["Programerare", "Målare"] as Array<String>,
      aboutMe: "Jag heter Markus och gillar att programera",
      rating: 4,
    },
    {
      name: "Markus",
      occupation: ["Programerare", "Snickare"] as Array<String>,
      aboutMe:
        "Jag heter Markus och gillar att programera. Jag heter Markus och gillar att programera. Jag heter Markus och gillar att programera.",
      rating: 2,
    },
    {
      name: "Markus",
      occupation: ["Programerare", "Snickare"] as Array<String>,
      aboutMe:
        "Jag heter Markus och gillar att programera. Jag heter Markus och gillar att programera. Jag heter Markus och gillar att programera.",
      rating: 3,
    },
    {
      name: "Markus",
      occupation: ["Programerare", "Snickare"] as Array<String>,
      aboutMe:
        "Jag heter Markus och gillar att programera. Jag heter Markus och gillar att programera. Jag heter Markus och gillar att programera.",
      rating: 1,
    },
    {
      name: "Markus",
      occupation: ["Programerare", "Snickare"] as Array<String>,
      aboutMe:
        "Jag heter Markus och gillar att programera. Jag heter Markus och gillar att programera. Jag heter Markus och gillar att programera.",
      rating: 5,
    },
    {
      name: "Markus",
      occupation: ["Programerare", "Snickare"] as Array<String>,
      aboutMe:
        "Jag heter Markus och gillar att programera. Jag heter Markus och gillar att programera. Jag heter Markus och gillar att programera. Jag heter Markus och gillar att programera. Jag heter Markus och gillar att programera. Jag heter Markus och gillar att programera.",
      rating: 3,
    },
    {
      name: "Bob",
      occupation: ["VVS-Installatör"] as Array<String>,
      aboutMe: "Jag äslkar att banka på rör",
      rating: 5,
    },
    {
      name: "Peter",
      occupation: ["Fågelskådare", "Cyber security expert"] as Array<String>,
      aboutMe:
        "Jag gillar att ta bilder på fåglar och lura gamlingar på pengar",
      rating: 4,
    },
    {
      name: "Petra",
      occupation: ["Blombutiksägare", "OS tävlare skytte"] as Array<String>,
      aboutMe: "Jag gillar att odla i min trädgård och jaga älg",
      rating: 4,
    },
    {
      name: "Petrus",
      occupation: ["Djurskötare", "Kustjägare"] as Array<String>,
      aboutMe:
        "Jag gillar att jogga med hundarna jag tar hand om och i hemlighet lära de att attackera emos",
      rating: 5,
    },
    {
      name: "Petter",
      occupation: ["Rörmokare"] as Array<String>,
      aboutMe:
        "Jag är egentligen en alien från en annan planet men ingen annan vet om det, de tror att jag är schizofren",
      rating: 3,
    },
    {
      name: "Pernilla",
      occupation: ["Embedded programmerare"] as Array<String>,
      aboutMe: "Jag var med och skrev anarkistens kokbok",
      rating: 3,
    },
  ] as Array<person>,
});
