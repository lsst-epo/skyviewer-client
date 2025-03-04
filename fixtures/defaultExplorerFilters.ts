import { FilterableCatalog } from "@/services/api/catalogs/schema";

export interface CharacteristicParams {
  min: {
    label: string;
    value: number;
  };
  max: {
    label: string;
    value: number;
  };
  step: number;
  value: Array<number>;
}

interface AppliedFilters {
  types: Record<FilterableCatalog, boolean>;
  characteristics: {
    distance: CharacteristicParams;
    brightness: CharacteristicParams;
  };
}

const defaultFilters: AppliedFilters = {
  types: {
    star: true,
    galaxy: true,
    nebula: true,
    transient: true,
  },
  characteristics: {
    distance: {
      min: {
        label: "Near",
        value: 0,
      },
      max: {
        label: "Far",
        value: 384,
      },
      step: 1,
      value: [0, 384],
    },
    brightness: {
      min: {
        label: "Dim",
        value: 0,
      },
      max: {
        label: "Bright",
        value: 626,
      },
      step: 1,
      value: [0, 626],
    },
  },
};

export default defaultFilters;
