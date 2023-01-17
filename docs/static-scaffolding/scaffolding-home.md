---
sidebar_position: 6
description: scaffolding your home view
---

# Scaffolding Home View 🏠

Generating a route and read/list view was a great bootstrap step, but it can be helpful to provide a home page and main function to immediately see you application running. 

This is where the scaffolding_home mason brick helps out. 

[scaffolding_home](https://github.com/sjhorn/mason_bricks/scaffolding_home) is a option mason brick that is called when the option `--generate-home` is true. 

The challenge with only use the `scaffolding` brick is that it is designed to generate one feature. So it only call `scaffolding_home` with a single route. 

If you are scaffolding many features - you can take advantage of the scaffolding_home brick directly. 

To do this lets add the brick on our project. 

## Adding Scaffolding Home brick to the project

```sh
# 🏠 add the scaffolding_home brick
mason add scaffolding_home 
```

## Making more than one feature

Based on on the feature we already have, lets add another one, but leave the home generation to aftewards

```sh
mason make scaffolding --package static_scaffolding_sample \
    --feature feature2 --properties "String name, bool complete=false" \
    --generate-home false --generate-tests false 
```

Now we have 2 features - *contact* and *todo* so lets scaffold them both into the home view. 

```sh
mason make scaffolding_home --package static_scaffolding_sample \
    --features feature1, feature2
```

This will generate:
```sh
You have the following features: [feature1, feature2]
conflict .../static_scaffolding_sample/lib/scaffold_app.dart
Overwrite scaffold_app.dart? (Yyna)  Y
✓ Made brick scaffolding_home (4.3s)
✓ Generated 2 file(s):
  .../static_scaffolding_sample/lib/main.dart (identical)
  .../static_scaffolding_sample/lib/scaffold_app.dart (new)
```

As you can see the brick takes a list of `features` seperated by a `comma`. 

The new home view will now look like the view below and you can navigate to either the `feature1` or the `feature2` views. 

![home 2 features](/img/home_2feature_scaffold.png)
![feature1](/img/feature1.png)
![feature2](/img/feature2.png)

While this is just an example names like `Contacts` for `Feature1` and `Todo` for `Feature2` would yield a better scaffold, but I used these simple names for demonstration purposes. 

With our new scaffolding_home we next need to consider scaffolding_home_tests.  