<!doctype html>
<html class="no-js" lang="{{ App::getLocale() }}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  @section('meta')
    <title>Document</title>
  @show

  <link rel="stylesheet" href="{{ mix('css/app.css') }}">
  @stack('stylesheet')

  @stack('top-script')
</head>
<body>

  @yield('content')
  
  <script src="{{ mix('js/manifest.js') }}"></script>
  <script src="{{ mix('js/vendor.js') }}"></script>
  <script src="{{ mix('js/app.js') }}"></script>
  @stack('bottom-script')
</body>
</html>
