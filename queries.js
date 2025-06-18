// TASK 2 – Basic CRUD
print("📘 Books in genre: Fiction");
printjson(db.books.find({ genre: "Fiction" }).toArray());

print("📗 Books published after 1950");
printjson(db.books.find({ published_year: { $gt: 1950 } }).toArray());

print("✍️ Books by George Orwell");
printjson(db.books.find({ author: "George Orwell" }).toArray());

print("💸 Updating price of 'The Hobbit'");
db.books.updateOne({ title: "The Hobbit" }, { $set: { price: 18.99 } });

print("🗑️ Deleting book 'Moby Dick'");
db.books.deleteOne({ title: "Moby Dick" });

// TASK 3 – Advanced Queries
print("✅ Books in stock and published after 2010");
printjson(db.books.find({ in_stock: true, published_year: { $gt: 2010 } }).toArray());

print("🧾 Titles, authors, and prices of all books");
printjson(db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 }).toArray());

print("🔼 Books sorted by price (ascending)");
printjson(db.books.find().sort({ price: 1 }).toArray());

print("🔽 Books sorted by price (descending)");
printjson(db.books.find().sort({ price: -1 }).toArray());

print("📚 Skipping 5, showing next 5 books");
printjson(db.books.find().skip(5).limit(5).toArray());

// TASK 4 – Aggregation Pipelines
print("📊 Average price per genre");
printjson(db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
]).toArray());

print("🏆 Author with most books");
printjson(db.books.aggregate([
  { $group: { _id: "$author", bookCount: { $sum: 1 } } },
  { $sort: { bookCount: -1 } },
  { $limit: 1 }
]).toArray());

print("📈 Number of books per decade");
printjson(db.books.aggregate([
  {
    $group: {
      _id: {
        $concat: [
          { $toString: { $multiply: [{ $floor: { $divide: ["$published_year", 10] } }, 10] } },
          "s"
        ]
      },
      count: { $sum: 1 }
    }
  }
]).toArray());

// TASK 5 – Indexing
print("⚙️ Creating index on title");
db.books.createIndex({ title: 1 });

print("⚙️ Creating compound index on author and published_year");
db.books.createIndex({ author: 1, published_year: -1 });

print("🔍 Execution stats for '1984'");
printjson(db.books.find({ title: "1984" }).explain("executionStats"));
