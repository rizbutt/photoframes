@extends('layouts.master')
@section('title', "Frames List")
@section('content')

<div class="card">
    <div class="card-header">
      <h3 class="card-title">Frames List</h3>
    </div>
    <!-- /.card-header -->
    <div class="card-body">
      <table class="table table-bordered">
        <thead>
          <tr>

            <th>Frame Name</th>
            <th>Description</th>
            <th>Image</th>
            <th style="width: 40px">Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            @foreach($frames as $frame)

            <tr onclick="show_hide_row('hidden_row{{$frame->frame_id}}' );">
            <td>{{ $frame->name }}</td>
            <td>{{ $frame->Description }}</td>
            <td>

                <img src="{{ asset('images/'.$frame->image) }}" height="200" width="150"/>
            </td>
            <td><span class="badge bg-danger">{{ $frame->frametype }}</span></td>
            <td><span class="badge bg-danger">Edit/Delet</span></td>
          </tr>
          <tr id="hidden_row{{$frame->frame_id}}" class="hidden_row">
            @foreach ($frame->variation as $item)

                <td><img src="{{ asset('images/'.$item->frame_design_image) }}" height="200" width="150"/></td>
                <td> <img src="{{ asset('images/'.$item->var_bgimage) }}" height="200" width="150"/></td>
                <td> <img src="{{ asset('images/'.$item->thumb_image) }}" height="200" width="150"/></td>
                <td>{{ $frame->frametype }}</td>
                <td>Edit/Delet</td>


            @endforeach

            </tr>
          @endforeach


        </tbody>
      </table>
    </div>
    <!-- /.card-body -->
    <div class="card-footer clearfix">

      <ul class="pagination pagination-sm m-0 float-right">
        {{ $frames }}
      </ul>
    </div>
  </div>
  <script type="text/javascript">
    function show_hide_row(row)
    {
     $("#"+row).toggle();
    }
    </script>


@endsection('content')
