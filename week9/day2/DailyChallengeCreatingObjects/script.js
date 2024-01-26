// Instructions
// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.

class Video {
    constructor(title, uploader, time) {
      this.title = title;
      this.uploader = uploader;
      this.time = time;
    }
  
    watch() {
      console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
  }
  
  // Instantiate a new Video instance and call the watch() method
  const video1 = new Video("Introduction to JavaScript", "JohnDoe", 120);
  video1.watch();
  
  // Instantiate a second Video instance with different values
  const video2 = new Video("CSS Basics", "JaneSmith", 180);
  video2.watch();
  
  // Bonus: Use an array to store data for five Video instances
  const videoData = [
    { title: "JavaScript Advanced Techniques", uploader: "Alice", time: 240 },
    { title: "React Basics", uploader: "Bob", time: 150 },
    { title: "Node.js Crash Course", uploader: "Charlie", time: 200 },
    { title: "HTML5 Features", uploader: "David", time: 180 },
    { title: "Responsive Web Design", uploader: "Eva", time: 210 }
  ];
  
  // Bonus: Loop through the array to instantiate those instances
  const videoInstances = [];
  for (const data of videoData) {
    const videoInstance = new Video(data.title, data.uploader, data.time);
    videoInstances.push(videoInstance);
  }
  
  // Display information for each video instance
  for (const videoInstance of videoInstances) {
    videoInstance.watch();
  }
  

