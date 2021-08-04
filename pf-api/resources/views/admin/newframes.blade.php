@extends('layouts.master')
@section('title', "Add New")
@section('content')
<div class="card card-primary">
    <div class="card-header">
      <h3 class="card-title">Add New Frames</h3>
    </div>
    <!-- /.card-header -->
    <!-- form start -->
    <form action="{{ route('framestore') }}" method="POST" enctype="multipart/form-data">
        @csrf
      <div class="card-body">
          <div class="row">
              <div class="col-8">
        <div class="form-group">
          <label for="InputName">Frame Nmae</label>
          <input type="text" class="form-control" name="frame_name" id="frame_name"  placeholder="Enter Frame Name">
        </div>
        <div class="form-group">
            <label for="frameType">Frame Type </label>
            <select class="custom-select form-control-border border-width-2" id="frametype" name="frametype">
              <option value="Wooden">Wooden</option>
              <option value="Plastic">Plastic</option>
              <option value="Mattel">Mattel</option>
            </select>
          </div>
          <div class="form-group">
            <label>Frame Details</label>
            <textarea name="frameDetail" class="form-control" rows="3" placeholder="Enter ..."></textarea>
          </div>
        <div class="form-group">
          <label for="image-url">Frame Image</label>
          <div class="input-group">
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="frameImage" name="frameImage">
              <label class="custom-file-label" for="exampleInputFile">Choose file</label>
            </div>
            <div class="input-group-append">
              <span class="input-group-text">Upload</span>
            </div>
          </div>
        </div>

          </div>
      <div class="col-4">
        <div class="row" id="Variations"></div>
        <div class="form-check">
            <button type="button" class="btn btn-primary" id="vari">Add Variant</button>
            <button id="Remove">Remove</button>
          </div>

      </div>
      </div>
    </div>
      <!-- /.card-body -->

      <div class="card-footer">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>

  <script>
      document.addEventListener('DOMContentLoaded', function () {
    $(document).ready(function () {
      let i = 0;
        $('#vari').on('click', function () {

            $("#Variations").append(`
            <div class="card-body">
                <div class='form-group'>
                    <div class='input-group'>
                        <div class='custom-file'>
                            <input type='file' class='custom-file-input btn btn-app bg-success' id='variFrame`+i+`' name='variFrame`+i+`'>
                            <label class='custom-file-label' for='variFrame'>Variant Frame</label>
                        </div>
                        <div class='input-group-append'><span class='input-group-text'>Upload</span></div>
                    </div>
                    <div class='input-group'>
                        <div class='custom-file'>
                            <input type='file' class='custom-file-input' id='variThum`+i+`' name='variThum`+i+`'>
                            <label class='custom-file-label' for='InputFile'>Variant Thumbnail</label>
                        </div>
                        <div class='input-group-append'><span class='input-group-text'>Upload</span></div>
                    </div>
                    <div class='input-group'>
                        <div class='custom-file'>
                            <input type='file' class='custom-file-input' id='variDesign`+i+`' name='variDesign`+i+`'>
                            <label class='custom-file-label' for='variDesign'>Variant Design</label>
                        </div>
                        <div class='input-group-append'><span class='input-group-text'>Upload</span></div>
                    </div>
                    <div class="form-group">
                        <label for="variPrice`+i+`">Price</label>
                        <input type="text" class="form-control" name="variPrice`+i+`" id="variPrice`+i+`"  placeholder="Frame Price">
                    </div>
                    <div class="form-group">
                        <label>Variation Description</label>
                        <textarea name="variDescription`+i+`" class="form-control" rows="3" placeholder="Enter ..."></textarea>
                        <input type="hidden" id="numvari" name="numvari" value="`+i+`">
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                          <input name="status`+i+`" class="form-check-input" type="checkbox">
                          <label class="form-check-label">Status</label>
                        </div>
                    </div>
                </div>
            </div>
                `);
                i++;

            console.log(i);
        });
        $("#Remove").on("click", function() {
                $("#textboxDiv").children().last().remove();
            });

    });
});
    </script>
  @endsection('content')

