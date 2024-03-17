import { useSuspenseQuery } from "@tanstack/react-query";
import { Mood } from "../components/mood-switcher/MoodSwitcher";
import { getMoods } from "../apis/moods";

export const useMoodsQuery = () =>
  useSuspenseQuery<Mood[]>({ queryKey: ["moods"], queryFn: getMoods });
