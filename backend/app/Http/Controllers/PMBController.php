<?php

namespace App\Http\Controllers;

use App\PMB;
use Illuminate\Http\Request;

class PMBController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //

        $path = public_path() . "/pmb_docs";

        $file = $request->file('dokumen');
        $file->move($path, $file->getClientOriginalName());

        $pmb = new PMB();

        $pmb->dokumen = $file->getClientOriginalName();
        $pmb->nama = $request->nama;
        $pmb->jenisKelamin = $request->jenisKelamin;
        $pmb->alamat = $request->alamat;
        $pmb->noTelp = $request->noTelp;
        $pmb->email = $request->email;
        $pmb->password = $request->password;
        $pmb->tempat = $request->tempat;
        $pmb->tanggalLahir = $request->tanggalLahir;
        $pmb->asalSekolah = $request->asalSekolah;
        $pmb->kota = $request->kota;
        $pmb->jurusan = $request->jurusan;


        $pmb->save();

        return response()->json([
            'msg' => '1 Data Recored'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\PMB  $pMB
     * @return \Illuminate\Http\Response
     */
    public function show(PMB $pMB)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\PMB  $pMB
     * @return \Illuminate\Http\Response
     */
    public function edit(PMB $pMB)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\PMB  $pMB
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PMB $pMB)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\PMB  $pMB
     * @return \Illuminate\Http\Response
     */
    public function destroy(PMB $pMB)
    {
        //
    }
}
