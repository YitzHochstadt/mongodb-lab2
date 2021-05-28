//1
db.people.aggregate([
    {$group:{ 
      _id: null,
      averageAge: {$avg: "$age"}
    }}
]);
//2
db.people.aggregate([
    {$group:{ 
      _id: "$gender",
      averageAge: {$avg: "$age"}
    }}
    ])
//3
db.people.aggregate([
    {$group:{ 
      _id: "$gender",
      count: {$sum: 1}
    }}
    ])
//4
db.people.aggregate([
    {$sort: {age: -1}},
    {$limit: 3}
    ])
//5
db.people.aggregate([
    {$sort: {age: 1}},
    {$limit: 5},
    {$project: {
        name: {$concat: ["$first_name", " ", "$last_name"]},
        age: true,
        _id: false
    }}
    ])
//6
//7
//8
//9
//10
//11
//12
//13
//14