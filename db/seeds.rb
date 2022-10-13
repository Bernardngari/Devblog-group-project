# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Seeding data"
Blog.create(title: "TypeScript", content: "What is the difference between any, unknown, and never? When should we be using each one of those? What are its drawbacks and strengths? TypeScript has recently turned ten years. To celebrate its anniversary, I wanted to explore and play with the intricacies of those types. This article should help you understand and learn their internals. By having that crystal clear in your mind you will easily identify which one should you use in each situation. Watch out for part two!!!", blogger_id: 1)
Blog.create(title: "Python Enum", content: "Enumerations come in handy when you need to define an immutable and discrete set of similar or related constant values that may or may not have semantic meaning in your code. Python doesn’t have an enum data type as part of its syntax. Fortunately, Python 3.4 added the enum module to the standard library. This module provides the Enum class for supporting general-purpose enumerations in Python.", blogger_id: 3)
Blog.create(title: "JavaScript", content: "Did you know that DOM elements with IDs are accessible in JavaScript as global variables? It’s one of those things that’s been around, like, forever but I’m really digging into it for the first time.", blogger_id: 5)
Blog.create(title: "Flutter", content: "Flutter is a cross-platform tool to build desktop, mobile, or web applications. Flutter apps are pixel-perfect. Flutter paints the same UI on each app irrespective of the target platform. This is because each Flutter app contains the Flutter engine. This engine renders the Flutter UI code.", blogger_id: 1)
Blog.create(title: "Go", content: "Golang is designed by computer science heavyweights for solving real-world problem. Golang is an optimization language it is used by Uber and Google for its mapping, Netflix for having streaming. Golang is a statically and fast-compiled language that is designed to be used with multicore architecture for efcient memory utilization.", blogger_id: 2)
Blog.create(title: "React", content: "React has one way data flow model. React enforces a chain of command in which properties have to flow down from a parent component to an immediate child component. Data in React apps only flows down through an app, from parent components to children components. This means you can't skip a layer of children when sending a property. React does not have two way data binding. This also means your children can't send a property back up to a parent.", blogger_id: 4)
puts "Finished seeding data"

c1 = Comment.create(comment: "I recently deployed a project with a Rails backend and React frontend to Heroku and wanted to share my experience with the process, since it is not entirely obvious.", blog_id: 1, blogger_id: 2)
c2 = Comment.create(comment: "I recently deployed a project with a Rails backend and React frontend to Heroku and wanted to share my experience with the process, since it is not entirely obvious.", blog_id: 1, blogger_id: 1)
c3 = Comment.create(comment: "I recently deployed a project with a Rails backend and React frontend to Heroku and wanted to share my experience with the process, since it is not entirely obvious.", blog_id: 2, blogger_id: 2)
c4 = Comment.create(comment: "I recently deployed a project with a Rails backend and React frontend to Heroku and wanted to share my experience with the process, since it is not entirely obvious.", blog_id: 2, blogger_id: 1)
