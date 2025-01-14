// Define the type structure for each talk
export interface Talk {
  id: string;
  source: string;
  title: string;
  subtitle: string;
  link: string;
  next: string;
  text: string;
}

// Create the array of talks with the specified type
export const talks: Talk[] = [
  {
    id: "google",
    source: "https://www.youtube.com/embed/wXQ3eNNZLAk",
    title: "Talks at Google",
    subtitle: "The Making of Spark: A Burning Man Story",
    link: "https://youtu.be/wXQ3eNNZLAk",
    next: "#hongkong",
    text: `Steve Brown, director and producer of Spark: A Burning Man Story, was
        invited to speak at Google to discuss the process of creating a film to
        tell the rich and complex story of Burning Man.`,
  },
  {
    id: "hongkong",
    source: "https://www.youtube.com/embed/gzXCzixOHcM",
    title: "TEDxHongKongED",
    subtitle: "Scale-Free Values -- Learning from Art and Nature",
    link: "https://youtu.be/gzXCzixOHcM",
    next: "#larryharvey",
    text: `At TEDxHongKongED, Steve Brown uses stories from the film Spark: A
        Burning Man Story to discuss the core values that enable artists rooted
        in self expression to come together as a collaborative community.`,
  },
  {
    id: "larryharvey",
    source: "https://www.youtube.com/embed/dfWRJF1K4ec",
    title: "TEDxBlackRockCity",
    subtitle: "Burning Man Founder Larry Harvey Interviewed by Steve Brown",
    link: "https://youtu.be/dfWRJF1K4ec",
    next: "#google",
    text: `Director Steve Brown interviewed the late Larry Harvey, founder of
    Burning Man, at the inaugural TEDxBlackRockCity. Larry describes how
    Burning Man started and the values and ideas that shaped its journey.`,
  },
];
