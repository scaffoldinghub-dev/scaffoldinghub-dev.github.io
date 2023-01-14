---
sidebar_position: 1
description: installing the pub.dev package 
---

# Installing package 🧱

```sh
flutter pub add scaffolding
```

This will add a line like this to your package's pubspec.yaml (and run an implicit flutter pub get):

```yaml
dependencies:
  scaffolding: ^0.0.1-dev.3
```

Once the package it needs to be configured before it will run correctly with `build_runner`. That is explained in the next step. 