import "babel-polyfill";
import VIEWER from "./App";
import PUC from "./DefaultParts/pUC";

/**
 * Library exports
 */
export const pUC = () => {
  return PUC;
};

export const Viewer = (element = "root", ViewerOptions) => {
  const {
    part = null,
    annotate = false,
    viewer = "circular",
    showAnnotations = true,
    showComplement = true,
    showIndex = true,
    zoom = { circular: 0, linear: 50 },
    colors = [],
    onSelection = () => {
      console.log(
        "No custom selection functionality yet. Function passed as onSelection option will be applied to selected range."
      );
    },
    onSearch = () => {
      console.log(
        "No custom search functionality yet. Function passed as onSearch option will be applied to search results."
      );
    },
    searchNext = {
      key: "",
      meta: false,
      ctrl: false,
      shift: false,
      alt: false
    },
    searchQuery = { query: "", mismatch: 0 },
    backbone = "",
    enzymes = []
  } = ViewerOptions;
  return VIEWER(element, part, {
    annotate,
    viewer,
    showAnnotations,
    showComplement,
    showIndex,
    zoom,
    colors,
    onSelection,
    onSearch,
    searchNext,
    searchQuery,
    backbone,
    enzymes
  });
};