<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>

<body>
    <div class="row mt-3">
        <div class="col-4">
            <div class="card">
                <div class="card-body">
                    <input type="text" id="nombre" class="form-control">
                    <div id="name_errors"></div>
                    <div class="mt-3">
                        <button id="btn" class="btn btn-success">insertar</button>
                        <button id="btn_update" class="btn btn-warning">actualizar</button>
                        <button id="btn_delete" class="btn btn-danger">eliminar</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-7">
            <div class="card">
                <div class="card-body p-0">
                    <table id="tabla" class="table table-stripped table-bordered table-responsive m-0 text-center">
                        <thead>
                            <th>ID</th>
                            <th>Nombre</th>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>
            {{-- <li class="page-item active" aria-current="page">
                <span class="page-link">1</span>
            </li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li> --}}
            <div class="card-footer " style="overflow-x: scroll;">
                <nav aria-label="...">
                    <ul class="pagination m-0" id="pag"></ul>
                </nav>
            </div>
        </div>
    </div>

    <ol id="lista"></ol>

    {{-- <button id="btn">Siguiente page</button> --}}
    <script src="{{ mix('js/app.js') }}"></script>
    <script src="{{ mix('js/API.js') }}"></script>
</body>

</html>
