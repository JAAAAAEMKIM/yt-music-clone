export type Song = {
  type: "song";
  id: number;
  title: string;
  singer: string;
  thumbnailUrl: string;
};
export type Album = {
  type: "album";
  id: number;
  title: string;
  singer: string;
  thumbnailUrl: string;
};
export type Video = {
  type: "video";
  id: number;
  title: string;
  channel: string;
  views: number;
  thumbnailUrl: string;
};
export type Channel = {
  type: "channel";
  id: number;
  title: string;
  subscribers: number;
  thumbnailUrl: string;
};

export type Item = Song | Album | Video | Channel;
