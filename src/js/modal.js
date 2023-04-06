function modal() {

  const wrapper = document.querySelector('.wrapper'),
        headerBottom = document.querySelector('.header__bottom'),
        scroll = calcScroll();

    const allModals = document.querySelectorAll('.modal'),
          allModalBackgrounds = document.querySelectorAll('.modal__overlay');
          

    function openModal(id) {
      let modal;
      if (id) modal = document.querySelector(`#${id}`);
      
      if (modal) {
        modal.classList.add('show');
        document.body.style.overflowY = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
        // for fixed element like wraperr with smooth scroll
        if (wrapper) wrapper.style.width = wrapper.offsetWidth - scroll + 'px';
        if(headerBottom) headerBottom.style.opacity = '0';
      }
    }

    function closeModal() {
      allModals?.forEach(modal => modal.classList.remove('show'));
      document.body.style.overflow = '';
      document.body.style.marginRight = `0px`;
      // for fixed element like wraperr with smooth scroll
      if (wrapper) wrapper.style.width = '100%';
      if(headerBottom) headerBottom.style.opacity = '1';
    }

    allModals?.forEach(modal => {
      modal?.addEventListener('click', (e) => {
        if (e.target.hasAttribute('data-close')) {
          closeModal();
        }
      });
    });
    allModalBackgrounds?.forEach(overlay => {
      overlay?.addEventListener('click', (e) => {
        if (e.target === overlay) {
          closeModal();
        }
      })
    })
    

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape") {
          closeModal();
        }
      });

  function calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visability = 'hidden';
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }


  document.querySelectorAll('[data-modal]')?.forEach(btn => {
    btn?.addEventListener('click', () => {
      openModal(btn.getAttribute('data-modal'));
    })
  })
}



// function modal() {
//   function classReg( className ) {
//     return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
//   }
  
//   // classList support for class management
//   // altho to be fair, the api sucks because it won't accept multiple classes at once
//   var hasClass, addClass, removeClass;
  
//   if ( 'classList' in document.documentElement ) {
//     hasClass = function( elem, c ) {
//       return elem.classList.contains( c );
//     };
//     addClass = function( elem, c ) {
//       elem.classList.add( c );
//     };
//     removeClass = function( elem, c ) {
//       elem.classList.remove( c );
//     };
//   }
//   else {
//     hasClass = function( elem, c ) {
//       return classReg( c ).test( elem.className );
//     };
//     addClass = function( elem, c ) {
//       if ( !hasClass( elem, c ) ) {
//         elem.className = elem.className + ' ' + c;
//       }
//     };
//     removeClass = function( elem, c ) {
//       elem.className = elem.className.replace( classReg( c ), ' ' );
//     };
//   }
  
//   function toggleClass( elem, c ) {
//     var fn = hasClass( elem, c ) ? removeClass : addClass;
//     fn( elem, c );
//   }
  
//   var classie = {
//     // full names
//     hasClass: hasClass,
//     addClass: addClass,
//     removeClass: removeClass,
//     toggleClass: toggleClass,
//     // short names
//     has: hasClass,
//     add: addClass,
//     remove: removeClass,
//     toggle: toggleClass
//   };
  
//   // transport
//   if ( typeof define === 'function' && define.amd ) {
//     // AMD
//     define( classie );
//   } else {
//     // browser global
//     window.classie = classie;
//   }

//   function init() {

//     var overlay = document.querySelector( '.md-overlay' );

//     [].slice.call( document.querySelectorAll( '.md-trigger' ) ).forEach( function( el, i ) {

//       var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) ),
//         close = modal.querySelector( '.md-close' );

//       function removeModal( hasPerspective ) {
//         classie.remove( modal, 'md-show' );

//         if( hasPerspective ) {
//           classie.remove( document.documentElement, 'md-perspective' );
//         }
//         document.body.style.overflow = '';
//       }

//       function removeModalHandler() {
//         removeModal( classie.has( el, 'md-setperspective' ) ); 
//       }

//       el.addEventListener( 'click', function( ev ) {
//         classie.add( modal, 'md-show' );
//         overlay.removeEventListener( 'click', removeModalHandler );
//         overlay.addEventListener( 'click', removeModalHandler );
//         document.body.style.overflow = 'hidden';

//         if( classie.has( el, 'md-setperspective' ) ) {
//           setTimeout( function() {
//             classie.add( document.documentElement, 'md-perspective' );
//           }, 25 );
//         }
//       });

//       close.addEventListener( 'click', function( ev ) {
//         ev.stopPropagation();
//         removeModalHandler();
//       });
//     } );
//   }
  
//     init();
// }

export default modal;