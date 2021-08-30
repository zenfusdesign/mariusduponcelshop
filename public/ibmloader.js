/*
 *  IBM PC
 *  August 12, 1981
 *  Intel 8088 @ 4.77 MHz
 *  16 kB ~ 256 kB
 *  https://en.wikipedia.org/wiki/IBM_Personal_Computer
 *
 *  Boot sequence
 *  0s   - Flashing cursor
 *  5s  - Single Beep
 *  7s  - Show bottom basic row
 *  7s 4frame - show Basic Information
 */
class IBMPC {
    constructor( parent, textCols=80 ) {
        var div = document.createElement('div')
            , text = document.createElement('pre')
            , cursor = document.createElement('span')
            , fontSize = 4
        ;
        if (textCols<81) fontSize = 8;
        if (textCols<41) fontSize = 15;
        cursor.innerHTML = '<b>_</b>';
        cursor.className = 'blink05';

//    div.style.position = 'absolute';
        div.style.width = div.style.height = '100%';
        div.style.overflow = 'hidden';
        div.style.color = '#151515';
        div.style.background = '#ffffff';
        div.style.fontSize = fontSize+'px';

        div.appendChild(text);
        div.appendChild(cursor);

        this.div = div;
        this.text = text;
        this.cursor = cursor;

        this.basic.header = `THE IBM Personal Computer Basic
Version C1.10 Copyright IBM Corp 1981
62940 Bytes free
Ok
`;

        parent.appendChild( this.div );
        setTimeout( this.bios.bind(this), this.rnd() );
    }
    rnd(max=1000) {
        return Math.floor( (Math.random() * max) );
    }
    bios() {
        setTimeout(this.boot.bind(this), 1000);
    }
    boot() {
        this.basic();
    }
    basic() {
        var header = this.basic.header
            , bottom = document.createElement('span')
        ;
        function genInvert(num , txt, spc='&nbsp;') {
            return num+'<span style="background: #262626; color: #ffffff;">'+txt+'</span>'+spc;
        }
        bottom.innerHTML = genInvert(1,'HELP')+
            genInvert(2,'SHOP ')+
            genInvert(3,'SOCIAL"')+
            genInvert(4,'ABOUT"')
/*            genInvert(5,'CONTACT<')+
            genInvert(6,',"LTP1')+
            genInvert(7,'TRON<')+
            genInvert(8,'TROFF<')+
            genInvert(9,'KEY ')+
            genInvert(0,'SCREEN');*/
        bottom.style.position = 'absolute';
        bottom.style.bottom = '0px';
        bottom.style.overflow = 'hidden';
        bottom.style.display = 'block';
        this.bottom = bottom;
        this.div.appendChild(this.bottom);
        this.text.innerText = '';

        var timer = setInterval( function() {
            if (!header.length) {
                this.cursor.className = 'blink025';
                return clearInterval(timer);
            }
            this.text.innerText += header.charAt(0);
            header = header.substr(1);
        }.bind(this), 20);
    }
    hide() {
        this.div.style.opacity = '0';
    }
    show() {
        this.div.style.opacity = '0';
    }
}


/*
 *  IBM PC AT
 *  March 1984
 *  Intel 80286 @ 6 MHz
 *  256 KB ~ 16 MB
 *  https://en.wikipedia.org/wiki/IBM_Personal_Computer/AT
 *
 *  Boot sequence
 *  0s   - Flashing cursor
 *  1s   - count ram from 0kb - 64kb by 8kb
 *  6s  - Single Beep
 *  8s  - Show bottom basic row
 *  8s 4frame - show Basic Information
 */
class IBMPCat extends IBMPC {
    constructor( parent ) {
        super( parent, 40 );
        this.RAM = 0;
        this.basic.header = `THE IBM Personal Computer Basic
Version D2.00 Copyright IBM Corp 1981,
Welcome To Roger Roger !
1982, 1983
60894 Bytes free
Ok
`;
    }
    bios() {
        var timer = setInterval( function() {
            if (this.RAM == 560) {
                clearInterval( timer );
                setTimeout( this.boot.bind(this), 2000);
            }
            this.text.innerText = this.RAM+' KB OK';
            this.RAM += 16;
        }.bind(this), 185);
    }
    basic() {
        super.basic();
        for (let i=0; i<11; i++) this.bottom.removeChild( this.bottom.lastChild );
    }
}

console.clear();

function init() {
    var body = document.querySelector('body');

    function genSystem( _class, _screen ) {
        var parent = document.createElement('div');
        parent.className = _screen;
        body.appendChild( parent );
        return new _class( parent );
    }

    genSystem( IBMPCat, 'screen640x400');
}

window.addEventListener('load', init);