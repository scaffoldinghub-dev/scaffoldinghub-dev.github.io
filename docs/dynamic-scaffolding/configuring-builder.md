---
sidebar_position: 2
description: configuring the dynamic builder
---

# Configuring builder 🔨

To configure and run the builder there are 3 steps:

1. Create and update lines to build.yaml
1. Add the desired domain dart files (typically in `lib/features/example_domain.dart` file)
1. Run the build_runner in either `watch` or `build` mode. 
1. Call the scaffold from your dart code


## Create and update `build.yaml`

Add the following to the `build.yaml` at the root of your flutter project

```yaml
targets:
  $default:
    builders:
      scaffolding|dynamicBuilder:
        generate_for: [lib/features/*.dart]
        enabled: true
```

## Create a domain dart file

Add a domain dart file to `lib/features/example_domain.dart`

```dart

abstract class ExampleDomain {
  String todo = '';
  bool complete = false;
}
```

## Run build_runner

To run dynamic scaffolding once run the following:
```sh
flutter pub run build_runner build
```

To watch for change and re-generate run the following:
```sh
flutter pub run build_runner watch
```

This will generate `example_domain.scaffold.dart` next to the dart file you created. 

## Call the scaffold from your dart file

The simplest way to call the file is directly from your `main.dart` as follows:

```dart
import 'features/example_domain.scaffold.dart' as scaffold;

void main(List<String> args) => scaffold.main(args);
```

If you are deeper in your application as a widget call in the following way:

```dart
import 'features/example_domain.scaffold.dart' as scaffold;

class App extends StatefulWidget {
  final NavigatorObserver? navigatorObserver;
  const App({super.key, this.navigatorObserver});

  @override
  State<App> createState() => _AppState();
}

class _AppState extends State<App> {
  late final repoFeature1;
  @override
  void initState() {
    super.initState();
    repoFeature1 = Feature1RepositoryImpl();
  }

  @override
  Widget build(BuildContext context) {
    return RepositoryProvider(
      create: (context) => RepositoryProvider<Feature1Repository>.value(
        value: repoFeature1,
      ),
      child: Builder(builder: (_) => const Feature1ReadView()),
    );
  }
}
```

Or via a Navigator push

```dart

// Asssuming the Feature1RepositoryImpl() is in parent widget tree
Navigator.of(context).push(Feature1ReadView.route())

```