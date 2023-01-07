<!DOCTYPE html>
<html>

<head>
    <title>TicketIn.com</title>

    <style>
        html,
        body {
            height: 100%;
            color: black
        }

        body {
            width: 100%;
        }

        .dd1 {
            height: 100px;
            border-bottom: solid 1px black;
            display: flex;
            align-items: center;
            justify-content: space-evenly
        }

        .dd1 img {
            width: 200px;
        }

        .dd1 p {
            font-size: large
        }

        .c {
            height: 100px;
        }

        .w {
            margin: 10px
        }
    </style>

</head>

<body>


    <div class='dd1'>
        <img src='{{ public_path('emaillogo.png') }}' />
        <p>Json BLah adsasdas asdas blah</p>

    </div>
    <div class="w">
        <p>Ticket class: {{ $note }}</p>
        <p>seat: XX</p>
        <p>Notes: XX</p>
        <p>{{ $serial_num }}</p>
    </div>
    <div style="margin-top: 10px">
        {{-- <img src="https://api.qrserver.com/v1/create-qr-code/?data={{ $serial_num }}&size=300x300" alt=""> --}}
        <img src="data:image/png;base64, {!! base64_encode(QrCode::size(300)->generate($serial_num)) !!} ">
    </div>
</body>

</html>
