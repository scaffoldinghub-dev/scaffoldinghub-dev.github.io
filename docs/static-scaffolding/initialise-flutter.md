---
sidebar_position: 2
description: Initialise your flutter project for scaffolding
---

# Initialise Flutter ⚙️

With the mason and scaffolding bricks installed we can now initialise the flutter project to allow static scaffolding. 

## Create a new flutter project

We will create a flutter project in the directory we created in the previous step `static_scaffolding_sample`

```sh
# ⭐️ create a new empty flutter project
flutter create .
```

You will see a long list if lines like the following:

```sh
Recreating project ....
  pubspec.yaml (created)
<...snip...>
Running "flutter pub get" in static_scaffolding_sample...        1,959ms
Wrote 127 files.

All done!
In order to run your application, type:

  $ cd .
  $ flutter run

Your application code is in ./lib/main.dart.
```

This step will bring in the basic flutter template. We will now adjust flutter for a simple scaffold app. 


```sh
# Add the scaffolding packages we depend on 
flutter pub add flutter_bloc equatable uuid
```

Let's remove the files created by flutter as we will replace these.

```sh
# Remove the boilerplate files:
rm lib/main.dart test/widget_test.dart
```

We now have a clean flutter project read to scaffold 🛫 - lets move on to scaffolding.