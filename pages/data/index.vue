<template>
    <section class="programs__page">

        <HeadVue text="Data Export" subtitle="/ Students" />


<!--        <p @click="startScanner"> Start!</p>-->
<!--        <div id="scanner-container"></div>-->

        <div class="export__content">
            <h2 class="export__content-title">Export</h2>

            <div class="export__content-block">
                <div class="export__content-item">
                    <div>
                        <h3 class="export__item-title">File</h3>
                        <p class="export__item-text">Deans</p>
                    </div>

                    <div class="export__content-upl">
                        <img src="@/assets/images/Upload-white.png">
                        <p class="export__content-sub">Export XLSX</p>
                    </div>

                </div>
                <div class="export__content-item">
                    <div>
                        <h3 class="export__item-title">File</h3>
                        <p class="export__item-text">Staff</p>
                    </div>

                    <div class="export__content-upl">
                        <img src="@/assets/images/Upload-white.png">
                        <p class="export__content-sub">Export XLSX</p>
                    </div>

                </div>
                <div class="export__content-item">
                    <div>
                        <h3 class="export__item-title">File</h3>
                        <p class="export__item-text">Departments</p>
                    </div>

                    <div class="export__content-upl">
                        <img src="@/assets/images/Upload-white.png">
                        <p class="export__content-sub">Export XLSX</p>
                    </div>

                </div>
                <div class="export__content-item">
                    <div>
                        <h3 class="export__item-title">File</h3>
                        <p class="export__item-text">All Students</p>
                    </div>

                    <div class="export__content-upl">
                        <img src="@/assets/images/Upload-white.png">
                        <p class="export__content-sub">Export XLSX</p>
                    </div>

                </div>
                <div class="export__content-item">
                    <div>
                        <h3 class="export__item-title">File</h3>
                        <p class="export__item-text">All Courses</p>
                    </div>

                    <div class="export__content-upl">
                        <img src="@/assets/images/Upload-white.png">
                        <p class="export__content-sub">Export XLSX</p>
                    </div>

                </div>
                <div class="export__content-item">
                    <div>
                        <h3 class="export__item-title">File</h3>
                        <p class="export__item-text">Assigned Courses</p>
                    </div>

                    <div class="export__content-upl">
                        <img src="@/assets/images/Upload-white.png">
                        <p class="export__content-sub">Export XLSX</p>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script>

import Quagga from 'quagga'

definePageMeta({
    middleware: ['guest'],
    pageTransition: {
        name: 'page'
    }
})


import HeadVue from '~~/components/Head.vue';

export default {
    components: {
        HeadVue
    },

//     methods: {
//      startScanner() {
//         Quagga.init({
//         inputStream: {
//             name: "Live",
//             type: "LiveStream",
//             target: document.querySelector('#scanner-container'),
//             constraints: {
//                 width: 480,
//                 height: 320,
//                 facingMode: "environment"
//             },
//         },
//         decoder: {
//             readers: [
//                 "code_128_reader",
//                 "ean_reader",
//                 "ean_8_reader",
//                 "code_39_reader",
//                 "code_39_vin_reader",
//                 "codabar_reader",
//                 "upc_reader",
//                 "upc_e_reader",
//                 "i2of5_reader"
//             ],
//             debug: {
//                 showCanvas: true,
//                 showPatches: true,
//                 showFoundPatches: true,
//                 showSkeleton: true,
//                 showLabels: true,
//                 showPatchLabels: true,
//                 showRemainingPatchLabels: true,
//                 boxFromPatches: {
//                     showTransformed: true,
//                     showTransformedBox: true,
//                     showBB: true
//                 }
//             }
//         },
//
//     }, function (err) {
//         if (err) {
//             console.log(err);
//             return
//         }
//
//         console.log("Initialization finished. Ready to start");
//         Quagga.start();
//
//     });
//
//     Quagga.onProcessed(function (result) {
//         let drawingCtx = Quagga.canvas.ctx.overlay,
//             drawingCanvas = Quagga.canvas.dom.overlay;
//
//         if (result) {
//             if (result.boxes) {
//                 drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
//                 result.boxes.filter(function (box) {
//                     return box !== result.box;
//                 }).forEach(function (box) {
//                     Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: "green", lineWidth: 2 });
//                 });
//             }
//
//             if (result.box) {
//                 Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: "#00F", lineWidth: 2 });
//             }
//
//             if (result.codeResult && result.codeResult.code) {
//                 Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: 'red', lineWidth: 3 });
//             }
//         }
//     });
//
//     Quagga.onDetected(function (result) {
//         console.log("Barcode detected and processed : [" + result.codeResult.code + "]", result);
//     });
// }
//     }

}


</script>

