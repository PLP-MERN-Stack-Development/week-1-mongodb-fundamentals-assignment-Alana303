[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19807689&assignment_repo_type=AssignmentRepo)
# MongoDB Fundamentals Assignment

This assignment focuses on learning MongoDB fundamentals including setup, CRUD operations, advanced queries, aggregation pipelines, and indexing.

## Assignment Overview

You will:
1. Set up a MongoDB database
2. Perform basic CRUD operations
3. Write advanced queries with filtering, projection, and sorting
4. Create aggregation pipelines for data analysis
5. Implement indexing for performance optimization

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install MongoDB locally or set up a MongoDB Atlas account
4. Run the provided `insert_books.js` script to populate your database
5. Complete the tasks in the assignment document

## Files Included

- `Week1-Assignment.md`: Detailed assignment instructions
- `insert_books.js`: Script to populate your MongoDB database with sample book data

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- MongoDB Shell (mongosh) or MongoDB Compass

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all tasks in the assignment
2. Add your `queries.js` file with all required MongoDB queries
3. Include a screenshot of your MongoDB database
4. Update the README.md with your specific setup instructions

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/) 


[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19807689&assignment_repo_type=AssignmentRepo)

# MongoDB Fundamentals Assignment

This assignment focuses on learning MongoDB fundamentals including setup, CRUD operations, advanced queries, aggregation pipelines, and indexing.

## Assignment Overview

You will:
1. Set up a MongoDB database
2. Perform basic CRUD operations
3. Write advanced queries with filtering, projection, and sorting
4. Create aggregation pipelines for data analysis
5. Implement indexing for performance optimization

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install MongoDB locally or set up a MongoDB Atlas account
4. Run the provided `insert_books.js` script to populate your database
5. Complete the tasks in the assignment document

## How to Run

1. Ensure MongoDB server is running locally (or connect via Atlas)
2. Run the insert script:

   ```bash
   node insert_books.js



## Task 2 – Basic CRUD Operations

Performed the following CRUD operations using MongoDB Compass:

- Find all Fiction books  
  ![Find Fiction](./Screenshots/task2-find-fiction.png)

- Find books published after 1950  
  ![Published After 1950](./Screenshots/task2-find-after-1950.png)

- Find books by George Orwell  
  ![George Orwell Books](./Screenshots/task2-find-orwell.png)

- Update price of 'The Hobbit' to 18.99  
  ![Update Hobbit](./Screenshots/task2-update-hobbit.png)

- Delete 'Moby Dick'  
  ![Delete Moby Dick](./Screenshots/task2-delete-mobydick.png)

---

## Task 3 – Advanced Queries

- Find books in stock and published after 2010  
  ![In Stock & Published After 2010](./Screenshots/task3-instock-2010.png)

- Project only title, author, and price  
  ![Projection](./Screenshots/task3-projection.png)

- Sort books by price ascending  
  ![Sort Ascending](./Screenshots/task3-sort-asc.png)

- Sort books by price descending  
  ![Sort Descending](./Screenshots/task3-sort-desc.png)

- Skip first 5 results and limit to 5  
  ![Skip and Limit](./Screenshots/task3-skip-limit.png)

---

## Task 4 – Aggregation Pipelines

- Average book price per genre  
  ![Average Price by Genre](./Screenshots/task4-avg-price-genre.png)

- Author with most books  
  ![Most Books by Author](./Screenshots/task4-most-books.png)

- Group books by decade  
  ![Books by Decade](./Screenshots/task4-books-decade.png)

---

## Task 5 – Indexing

- Created index on `title`, `author`, and `published_year`  
  ![Index Creation](./Screenshots/task5-indexes.png)

- Execution stats for finding `1984` using `.explain("executionStats")`  
  ![Explain Plan 1984](./Screenshots/task5-explain-1984.png)

---

## Notes

- All queries are included in the `queries.js` file.
- Screenshots are stored in the `Screenshots/` folder.
