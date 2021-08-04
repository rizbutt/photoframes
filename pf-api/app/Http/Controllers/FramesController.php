<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Frames;
use App\FrameVariation;

class FramesController extends Controller
{
    public $successStatus = 200;
    public function index()
    {
    //     $frames = Frames::addSelect([ FrameVariation::select('price')
    //     ->whereColumn('frame_id', 'frames.frame_id')
    //     ->limit(1)
    // ])->get();
    $frames = Frames::join('frames_variations', 'frames_variations.frame_id', '=', 'frames.frame_id')
              		->paginate(5);


        $frames = Frames::latest()->paginate(5);
        foreach($frames as $frame){
            $variations = FrameVariation::where('frame_id', '=', $frame->frame_id)->get();
            $frame['variation'] = $variations;
        }
        return view('admin.frames',compact('frames'))
            ->with('i', (request()->input('page', 1) - 1) * 5);
    }
    public function show()
    {
    $frames = Frames::join('frames_variations', 'frames_variations.frame_id', '=', 'frames.frame_id')
              		->paginate(10);


        $frames = Frames::latest()->paginate(5);
        foreach($frames as $frame){
            $variations = FrameVariation::where('frame_id', '=', $frame->frame_id)->get();
            $frame['variation'] = $variations;
        }
        return response()->json(['success' => $frames], $this-> successStatus);

    }
    public function addframe()
    {
        return view('admin.newframes');
    }
    public function store(Request $request) {
        $request->validate([
            'frame_name' => 'required',
            'frametype' => 'required',
            'frameImage' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ]);
       $input = $request->all();
       $images = $request->file();
       if ($frameimage = $request->file('frameImage')) {
        $imageName = time().'.'.$frameimage->getClientOriginalExtension();

        $frameimage->move(public_path('images'), $imageName);

       }


       $frame_values = [
        'name' => $input['frame_name'],
        'frametype' => $input['frametype'],
        'Description' => $input['frameDetail'],
        'image' => $imageName
       ];
       $frame = Frames::create($frame_values);
       $id = $frame->id;

       $numberOfVariation =  (int)$input['numvari'];
       for ($i = 0; $i <= $numberOfVariation; $i++){
           $variDes = 'variDescription'.$i;
           $variFrame = 'variFrame'.$i;
           $variThum = 'variThum'.$i;
           $variDesign = 'variDesign'.$i;
           $variPrice = 'variPrice'.$i;
           $varistatu = 'status'.$i;
           $isTouch = isset($variable);
           if(isset($varistatu)){
                $varistatus = '1';
           }else{
            $varistatus = '0';
           }
           if ($variframe = $request->file($variFrame)) {
            $variFrameName = time().'_frame.'.$variframe->getClientOriginalExtension();
            $variframe->move(public_path('images'), $variFrameName);
           }
           if ($variThum = $request->file($variThum)) {
            $variThumName = time().'_thum.'.$variThum->getClientOriginalExtension();
            $variThum->move(public_path('images'), $variThumName);
           }
           if ($variDesi = $request->file($variDesign)) {
            $variDesignName = time().'_Design.'.$variDesi->getClientOriginalExtension();
            $variDesi->move(public_path('images'), $variDesignName);
           }

           $frameVariation = ['var_bgimage' => $variFrameName, 'thumb_image' => $variThumName, 'frame_design_image' => $variDesignName, 'description' => $input[$variDes],'price'=> (int)$input[$variPrice],'status' => $varistatus, 'frame_id' => $id ];

            $variation = FrameVariation::create($frameVariation);
           //print_r($frameVariation);
        }

        return redirect()->route('frames')
        ->with('success','Product created successfully.');
        //return view('frames');
    }

    public function frames() {
        return view('admin.frames');
    }
}
