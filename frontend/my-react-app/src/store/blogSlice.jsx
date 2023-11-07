import { createSlice } from "@reduxjs/tookkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogList: [
      {
        title: "Sample Blog Post 1 from Store",
        description: "This is the first sample blog post.",
        date: "October 10, 2023",
        imageUrl: "https://example.com/image1.jpg",
        author: "John Doe",
      },
      {
        title: "Sample Blog Post 2",
        description: "This is the second sample blog post.",
        date: "October 15, 2023",
        imageUrl: "https://example.com/image2.jpg",
        author: "Jane Smith",
      },
      {
        title: "Sample Blog Post 3",
        description: "This is the third sample blog post.",
        date: "October 20, 2023",
        imageUrl: "https://example.com/image3.jpg",
        author: "Bob Johnson",
      },
      // Add more sample posts as needed
    ],
  },
  reducers: {},
});
