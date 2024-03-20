import { defineStore } from "pinia";
import { ref } from "vue";

export const useFeedbackStore = defineStore("url", () => {
  const selectedFeedbackUser = ref("");

  return { selectedFeedbackUser };
});