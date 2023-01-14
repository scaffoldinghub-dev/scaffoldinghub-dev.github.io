---
sidebar_position: 7
description: scaffolding tests for your home view
---

# Scaffolding Home Tests 🧪🏡

The [scaffolding_home_test](https://github.com/sjhorn/mason_bricks/scaffolding_home_test) is the simplest scaffolding brick designed to unit test the home view brick. It takes the same parameters as the previous scaffolding_home brick. 

So to add test to many features from the previous example we would first add the brick

```sh
# 🏠 add the scaffolding_home_test brick
mason add scaffolding_home_test \
    --git-url https://github.com/sjhorn/mason_bricks \
    --git-path bricks/scaffolding_home_test
```

and then running with the same parameters as scaffolding_home_test

```sh
mason make scaffolding_home_test --package static_scaffolding_sample \
    --features feature1,feature2
```

Which will overwrite the test that only coverage one feature with output similar to below. 

```sh
You have the following features: [feature1, feature2]
conflict .../static_scaffolding_sample/test/scaffold_app_test.dart
Overwrite scaffold_app_test.dart? (Yyna)  Y
✓ Made brick scaffolding_home_test (2.5s)
✓ Generated 1 file:
  .../static_scaffolding_sample/test/scaffold_app_test.dart (new)
```

Now we have all the fundamentals 🔥 , next we learn how we can edit the scaffolding templates if we want to customise.