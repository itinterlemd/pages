(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t(27)},22:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(14),o=t.n(r),i=(t(22),t(2)),s=t(3),c=t(5),u=t(4),m=t(6),d=t(28),p=t(31),E=t(30),g=t(29),b=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(c.a)(this,Object(u.a)(a).call(this))).getName=function(a){var t=a.target.value;e.setState({name:t}),console.log(e.state.name)},e.getEmail=function(a){var t=a.target.value;t.match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)?e.setState({email:t}):(e.setState({email:""}),console.log("Incorrect Email, must match Expression")),console.log(e.state.email)},e.getDescription=function(a){var t=a.target.value;e.setState({message:t}),console.log(e.state.message)},e.submitForm=function(a){if(a.preventDefault(),""===e.state.name||""===e.state.email||""===e.state.message)return e.setState({formError:!0}),!1;e.setState({formError:!1}),console.log("UserData: {\n            Username: ".concat(e.state.name,",\n            Email: ").concat(e.state.email,",\n            Message: ").concat(e.state.message,"\n        }")),console.log("form sent")},e.state={name:"",email:"",message:"",formError:!1},e}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("form",null,this.state.formError&&l.a.createElement("p",{className:"error"},"Fill all the input fields please."),l.a.createElement("p",null,"Fill in the next form to send us a message"),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement("input",{type:"text",name:"name",placeholder:"Your name here please",onChange:this.getName})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",name:"email",placeholder:"We will contact you after reviewing your message",onChange:this.getEmail})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"name"},"Message"),l.a.createElement("textarea",{onChange:this.getDescription,maxLength:"450"})),l.a.createElement("div",null,l.a.createElement("p",null,"We will answer as soon as possible"),l.a.createElement("input",{type:"submit",name:"submit",value:"Send",onClick:this.submitForm})))}}]),a}(n.Component),f=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",{className:"logo"},"Campus",l.a.createElement("span",null," - ITLI"))),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{href:"#section1"},"About")),l.a.createElement("li",null,l.a.createElement("a",{href:"#section2"},"Mission")),l.a.createElement("li",null,l.a.createElement("a",{href:"#section3"},"Contact"))))}}]),a}(n.Component),v=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("header",null,l.a.createElement(f,null),l.a.createElement("div",{className:"head class_hidden"},l.a.createElement("h1",null,"Instituto T\xe9cnico",l.a.createElement("br",null)," Laboral INTERLEM'D"),l.a.createElement("div",null,l.a.createElement("p",null,"Integer posuere leo non erat ornare dictum id vitae magna. Proin consectetur iaculis nisi, ut convallis tortor tempor congue. Curabitur sit amet tempus felis. Duis tellus eros, pellentesque at rhoncus eu, maximus ut diam."),l.a.createElement("div",null,l.a.createElement("a",{className:"contact",href:"#section3"},"Contact Us")))))}}]),a}(n.Component),h=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("footer",null,l.a.createElement("h3",null,"Laboratorio de Sistemas - ITLI"),l.a.createElement("p",null,"Soporte ",l.a.createElement("br",null)," itinterlemd@gmail.com"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.facebook.com/ong.interlemd",target:"_blank"},l.a.createElement("i",{className:"fab fa-facebook-f"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.facebook.com/ong.interlemd/photos",target:"_blank"},l.a.createElement("i",{className:"fab fa-instagram"})))))}}]),a}(n.Component),y=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(v,null),this.props.children,l.a.createElement(h,null))}}]),a}(n.Component),N=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(y,null,l.a.createElement("main",null,l.a.createElement("section",{className:"intro",id:"section1"},l.a.createElement("h2",null,"About Us"),l.a.createElement("div",null,l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel gravida nisi. Vestibulum ac consequat lorem. In in mi massa. Donec ut tellus sit amet sem ornare fermentum at et nunc. Pellentesque ac elementum metus. Praesent non venenatis lacus. In sagittis urna in nulla sagittis mattis."))),l.a.createElement("div",null,l.a.createElement("div",{className:"services"},l.a.createElement("div",{className:"service-one"},l.a.createElement("p",{className:"service-icon"},l.a.createElement("i",{className:"far fa-calendar-alt"})),l.a.createElement("p",{className:"service-title"},"Planning"),l.a.createElement("p",null,"Mauris vitae turpis ut sem blandit consequat et at ligula. Suspendisse quam lectus, tristique dapibus sapien et, tempus suscipit nisl.")),l.a.createElement("div",{className:"service-two"},l.a.createElement("p",{className:"service-icon"},l.a.createElement("i",{className:"fas fa-crop"})),l.a.createElement("p",{className:"service-title"},"Design"),l.a.createElement("p",null,"Nulla eu metus faucibus, vehicula tortor quis, venenatis odio. Nullam purus mauris, feugiat in odio vitae, posuere volutpat libero. Sed et convallis libero.")),l.a.createElement("div",{className:"service-three"},l.a.createElement("p",{className:"service-icon"},l.a.createElement("i",{className:"fas fa-code"})),l.a.createElement("p",{className:"service-title"},"Development"),l.a.createElement("p",null,"Ut ornare vitae enim a rhoncus. Nullam aliquet tristique scelerisque. Sed volutpat dictum risus ac laoreet. Suspendisse id lorem in enim sollicitudin varius.")))),l.a.createElement("div",{className:"gallery"},l.a.createElement("div",{className:"gallery-item-one"}),l.a.createElement("div",{className:"gallery-item-two"}),l.a.createElement("div",{className:"gallery-item-three"}),l.a.createElement("div",{className:"gallery-item-four"}),l.a.createElement("div",{className:"gallery-item-five"}),l.a.createElement("div",{className:"gallery-item-six"})),l.a.createElement("section",{id:"section2"},l.a.createElement("h2",null,"Our Mission"),l.a.createElement("div",null,l.a.createElement("p",null,"Integer sit amet venenatis erat. Cras elementum tortor odio, sit amet euismod nunc cursus ut. Donec sollicitudin orci sed enim volutpat, volutpat rutrum magna semper. Fusce leo lacus, pulvinar sit amet dignissim in, consectetur eget nulla. Etiam ac turpis augue. Sed tincidunt pulvinar tincidunt. Integer ac blandit magna. Nulla dapibus convallis luctus. "),l.a.createElement("p",null,"Ut elementum urna sit amet elit egestas hendrerit. Vivamus quis sem fringilla, tincidunt nisi non, congue libero. Etiam cursus nulla quis sapien varius, eget accumsan augue mattis. Cras accumsan sapien nulla, eu eleifend odio tempus sit amet. Suspendisse gravida hendrerit sapien, ut molestie mi pellentesque eget. Aliquam eleifend velit vel libero elementum, vitae consectetur nisl sollicitudin. Suspendisse volutpat fringilla vehicula."))),l.a.createElement("section",{id:"section3"},l.a.createElement("h2",null,"Contact Us"),l.a.createElement(b,null))))}}]),a}(n.Component),I=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("header",null,l.a.createElement("nav",{className:"gridColumn1"},l.a.createElement("div",{className:"logoImgHeader"},l.a.createElement("div",{className:"logoImgMiddle"},l.a.createElement("img",{src:"/pages/images/logo_solo.jpg",alt:"Campus ITLI",width:"80"})),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("span",{className:"logoTextHeader"}," INSTITUTO T\xc9CNICO LABORAL INTERLEM'D "),l.a.createElement("p",null,l.a.createElement("span",null," RESOLUCI\xd3N No. 0164 de 2018 - Secretar\xeda de Educaci\xf3n y Cultura de Yopal"))))),l.a.createElement("div",{className:"lineColorGreen"})),l.a.createElement("div",{className:"head class_hidden"},l.a.createElement("h1",{className:"color_text_head  "},"Instituto T\xe9cnico",l.a.createElement("br",null)," Laboral INTERLEM'D"),l.a.createElement("div",null,l.a.createElement("p",{className:"color_text_head"}," ",l.a.createElement("strong",null,"Fundaci\xf3n Internacional de Libre Expresi\xf3n Motora y de Destrezas INTERLEM\u2019D, identificado con NIT 900459129-7 y con domicilio principal en la Carrera 24 No. 23-05. Barrio el Salitre - Yopal Casanare, Rep\xfablica de Colombia. Tel\xe9fono 3142981372 - 3112520242 en la ciudad de Yopal \u2013 Casanare.")),l.a.createElement("div",null)))),this.props.children,l.a.createElement(h,null))}}]),a}(n.Component),O=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(I,null,l.a.createElement("main",null,l.a.createElement("section",{className:"padding_10_0 margin_auto txt_align_justify",id:"avisoID"},l.a.createElement("h2",{className:"line_height_none"},"AVISO DE PRIVACIDAD"),l.a.createElement("div",null,l.a.createElement("p",{className:"txt_align_justify"},"El presente Aviso de Privacidad (en adelante el \u201cAviso\u201d) establece los t\xe9rminos y condiciones en virtud de los cuales la Fundaci\xf3n Internacional de Libre Expresi\xf3n Motora y de Destrezas INTERLEM\u2019D, identificado con NIT 900459129-7 y con domicilio principal en la Carrera 24 No. 23-05. Barrio el Salitre - Yopal Casanare, Rep\xfablica de Colombia, realizar\xe1 el tratamiento de sus datos personales."),l.a.createElement("p",null,"1. TRATAMIENTO Y FINALIDAD:"),l.a.createElement("p",{className:"txt_align_justify"},"El tratamiento que realizar\xe1 la Fundaci\xf3n Internacional de Libre Expresi\xf3n Motora y de Destrezas INTERLEM\u2019D con la informaci\xf3n personal ser\xe1 el siguiente: La recolecci\xf3n, almacenamiento, uso, circulaci\xf3n, procesamiento de datos personales garantizando los lineamientos de seguridad y confidencialidad definidos en la Ley 1581 de 2012 y el Decreto 1377 de 2013, para: Registrar la informaci\xf3n de datos personales en las bases de datos y sistemas de informaci\xf3n de INTERLEM\u2019D. Ofrecer los programas corporativos de bienestar y planificar actividades institucionales, para el titular. Efectuar encuestas de satisfacci\xf3n respecto de los bienes y servicios ofrecidos por INTERLEM\u2019D. Efectuar las gestiones pertinentes para el desarrollo del objeto social de la fundaci\xf3n INTERLEM\u2019D en lo que tiene que ver con el cumplimiento de los acuerdos, convenios y  contratos realizados con el Titular de la informaci\xf3n."),l.a.createElement("p",null,"2. DERECHOS DEL TITULAR:"),l.a.createElement("p",null,"Como titular de sus datos personales Usted tiene derecho a:"),l.a.createElement("p",null,l.a.createElement("ul",null,l.a.createElement("li",null,"Acceder en forma gratuita a los datos proporcionados que hayan sido objeto de tratamiento."),l.a.createElement("li",null,"Conocer, actualizar y rectificar su informaci\xf3n frente a datos parciales, inexactos, incompletos, fraccionados, que induzcan a error, o a aquellos cuyo tratamiento est\xe9 prohibido o no haya sido autorizado."),l.a.createElement("li",null,"Solicitar prueba de la autorizaci\xf3n otorgada."),l.a.createElement("li",null,"Presentar ante la Superintendencia de Industria y Comercio (SIC) quejas por infracciones a lo dispuesto en la normatividad vigente."),l.a.createElement("li",null,"Revocar la autorizaci\xf3n y/o solicitar la supresi\xf3n del dato, siempre que no exista un deber legal o contractual que impida eliminarlos."),l.a.createElement("li",null,"Abstenerse de responder las preguntas sobre datos sensibles. Tendr\xe1 car\xe1cter facultativo las respuestas que versen sobre datos sensibles o sobre datos de las ni\xf1as y ni\xf1os y adolescentes."))),l.a.createElement("p",null,"3. MECANISMOS PARA CONOCER LA POL\xcdTICA DE TRATAMIENTO"),l.a.createElement("p",null,"El Titular puede acceder a nuestra Pol\xedtica de Tratamiento de informaci\xf3n, la cual se encuentra publicada en el siguinete link: ",l.a.createElement("a",{href:"#politicaID"},"Pol\xedtica")))),l.a.createElement("section",{className:"grid_col_1 padding_10_0 margin_auto txt_align_justify",id:"politicaID"},l.a.createElement("p",null,l.a.createElement("strong",null,"POLITICA DE TRATAMIENTO Y PROTECCION DE DATOS PERSONALES "),"\xa0"),l.a.createElement("p",null,"La presente Pol\xedtica de Tratamiento y Protecci\xf3n de Datos Personales, se aplicar\xe1 a todas las Bases de Datos y/o Archivos que contengan los datos personales y que sean objeto de tratamiento por la Fundaci\xf3n Internacional de Libre Expresi\xf3n Motora y de Destrezas INTERLEM\u2019D (En adelante INTERLEM\u2019D), Considerado como responsable y/o encargado del tratamiento de los datos personales."),l.a.createElement("p",null,l.a.createElement("strong",null,"OBJETIVO: ")),l.a.createElement("p",null,"Establecer los criterios para la recolecci\xf3n, almacenamiento, uso, circulaci\xf3n y supresi\xf3n de los datos con la finalidad de dar la protecci\xf3n necesaria utilizando herramientas y mecanismos que permitan dar garant\xeda para su confidencialidad, autenticidad y la integridad de la informaci\xf3n tratada por INTERLEM\u2019D."),l.a.createElement("p",null,l.a.createElement("strong",null,"ALCANCE: ")),l.a.createElement("p",null,"Esta pol\xedtica aplica para toda la informaci\xf3n personal registrada en las bases de datos de la Fundaci\xf3n Internacional de Libre Expresi\xf3n Motora y de Destrezas INTERLEM\u2019D, quien act\xfaa en calidad de responsable del tratamiento de los datos personales."),l.a.createElement("p",null,l.a.createElement("strong",null,"OBLIGACIONES:")),l.a.createElement("p",null,"Esta pol\xedtica es de obligatorio y estricto cumplimiento para la Fundaci\xf3n Internacional de Libre Expresi\xf3n Motora y de Destrezas INTERLEM\u2019D."),l.a.createElement("p",null,l.a.createElement("strong",null,"RESPONSABLE DEL TRATAMIENTO:")),l.a.createElement("p",null,"\xa0La Fundaci\xf3n Internacional de Libre Expresi\xf3n Motora y de Destrezas INTERLEM\u2019D, legalmente constituida, identificada con el NIT 900459129-7, con domicilio principal en la Carrera 24 No. 23-05. Barrio el Salitre - Yopal Casanare, Rep\xfablica de Colombia. P\xe1gina www.interlemd.org"),l.a.createElement("p",null,"Tel\xe9fono 3142981372 - 3112520242 en la ciudad de Yopal \u2013 Casanare,"),l.a.createElement("p",null,l.a.createElement("strong",null,"DEFINICIONES ")),l.a.createElement("p",null,l.a.createElement("strong",null,"Dato personal"),": Se trata de cualquier informaci\xf3n vinculada o que pueda asociarse a una persona determinada, como su nombre o n\xfamero de identificaci\xf3n, o que puedan hacerla determinable, como sus rasgos f\xedsicos."),l.a.createElement("p",null,l.a.createElement("strong",null,"Dato p\xfablico"),": Es uno de los tipos de datos personales existentes. Son considerados datos p\xfablicos, entre otros, los datos relativos al estado civil de las personas, a su profesi\xf3n u oficio y a su calidad de comerciante o de servidor p\xfablico. Por su naturaleza, los datos p\xfablicos pueden estar contenidos, entre otros, en registros p\xfablicos, documentos p\xfablicos, gacetas y boletines oficiales y sentencias judiciales debidamente ejecutoriadas que no est\xe9n sometidas a reserva."),l.a.createElement("p",null,l.a.createElement("strong",null,"Dato semiprivado"),": Son los datos que no tienen naturaleza \xedntima, reservada, ni p\xfablica y cuyo"),l.a.createElement("p",null,"conocimiento o divulgaci\xf3n puede interesar no solo al titular sino a cierto sector o a la sociedad en general. Los datos financieros y crediticios de la actividad comercial o de servicios, son algunos ejemplos."),l.a.createElement("p",null,l.a.createElement("strong",null,"Dato privado"),": Es el dato que por su naturaleza \xedntima o reservada solo es relevante para el titular. Los gustos o preferencias de las personas, por ejemplo, corresponden a un dato privado."),l.a.createElement("p",null,l.a.createElement("strong",null,"Datos sensibles"),": Son aquellos que afectan la intimidad del titular o pueden dar lugar a que lo discriminen, es decir, aquellos que revelan su origen racial o \xe9tnico, su orientaci\xf3n pol\xedtica, las convicciones religiosas o filos\xf3ficas, la pertenencia a sindicatos, organizaciones sociales, de derechos humanos, as\xed como los datos relativos a la salud, a la vida sexual, y los datos biom\xe9tricos, entre otros."),l.a.createElement("p",null,l.a.createElement("strong",null,"Autorizaci\xf3n"),": Es el consentimiento que da cualquier persona para que las empresas o personas responsables del tratamiento de la informaci\xf3n, puedan utilizar sus datos personales."),l.a.createElement("p",null,l.a.createElement("strong",null,"Base de Datos"),": Conjunto organizado de datos personales que son objeto de tratamiento."),l.a.createElement("p",null,l.a.createElement("strong",null,"Encargado del tratamiento"),": Es la persona natural o jur\xeddica que realiza el tratamiento de datos personales, a partir de una delegaci\xf3n que le hace el responsable, recibiendo instrucciones acerca de la forma en la que deber\xe1n ser administrados los datos.\xa0\xa0"),l.a.createElement("p",null,l.a.createElement("strong",null,"Responsable del tratamiento"),": Es la persona natural o jur\xeddica, p\xfablica o privada, que decide sobre la finalidad de las bases de datos y/o el tratamiento de los mismos."),l.a.createElement("p",null,l.a.createElement("strong",null,"Titular"),": Es la persona natural cuyos datos personales son objeto de tratamiento."),l.a.createElement("p",null,l.a.createElement("strong",null,"Tratamiento"),": Cualquier operaci\xf3n o conjunto de operaciones sobre datos personales, tales como la recolecci\xf3n, almacenamiento, uso, circulaci\xf3n o supresi\xf3n."),l.a.createElement("p",null,l.a.createElement("strong",null,"Aviso de privacidad"),": Es una de las opciones de comunicaci\xf3n verbal o escrita que brinda la ley para darle a conocer a los titulares de la informaci\xf3n, la existencia y las formas de acceder a las pol\xedticas de tratamiento de la informaci\xf3n y el objetivo de su recolecci\xf3n y uso."),l.a.createElement("p",null,"Transferencia: Se trata de la operaci\xf3n que realiza el responsable o el encargado del tratamiento de los datos personales, cuando env\xeda la informaci\xf3n a otro receptor, que, a su vez, se convierte en responsable del tratamiento de esos datos."),l.a.createElement("p",null,l.a.createElement("strong",null,"TRATAMIENTO Y FINALIDAD:")),l.a.createElement("p",null,"El tratamiento que realizar\xe1 INTERLEM\u2019D con la informaci\xf3n personal ser\xe1 el siguiente:"),l.a.createElement("p",null,"La recolecci\xf3n, almacenamiento, uso, circulaci\xf3n, procesamiento de datos personales garantizando los lineamientos de seguridad y confidencialidad definidos en la Ley 1581 de 2012 y el Decreto 1377 de 2013, para:"),l.a.createElement("p",null,"Registrar la informaci\xf3n de datos personales en las bases de datos y sistemas de informaci\xf3n de INTERLEM\u2019D."),l.a.createElement("p",null,"Ofrecer los programas corporativos de bienestar y planificar actividades institucionales, para el titular."),l.a.createElement("p",null,"Efectuar encuestas de satisfacci\xf3n respecto de los bienes y servicios ofrecidos por INTERLEM\u2019D."),l.a.createElement("p",null,"Efectuar las gestiones pertinentes para el desarrollo del objeto social de la fundaci\xf3n INTERLEM\u2019D en lo que tiene que ver con el cumplimiento de los acuerdos, convenios y contratos realizados con el Titular de la informaci\xf3n."),l.a.createElement("p",null,l.a.createElement("strong",null,"DERECHOS DE LOS TITULARES:")),l.a.createElement("p",null,"Como titular de sus datos personales Usted tiene derecho a:"),l.a.createElement("p",null,"(i)\xa0\xa0 Acceder de forma gratuita a los datos proporcionados que hayan sido objeto de tratamiento."),l.a.createElement("p",null,"(ii)\xa0 Conocer, actualizar y rectificar su informaci\xf3n frente a datos parciales, inexactos, incompletos, fraccionados, que induzcan a error, o aquellos cuyo tratamiento est\xe9 prohibido o no haya sido autorizado."),l.a.createElement("p",null,"(iii)\xa0 Solicitar prueba de la autorizaci\xf3n otorgada."),l.a.createElement("p",null,"(iv)\xa0 Presentar ante la Superintendencia de Industria y Comercio (SIC) quejas por infracciones a lo dispuesto en la normatividad vigente."),l.a.createElement("p",null,"(v)\xa0 Revocar la autorizaci\xf3n y/o solicitar la supresi\xf3n del dato, siempre que no exista un deber legal o contractual que impida eliminarlos."),l.a.createElement("p",null,"(vi)\xa0 Abstenerse de responder las preguntas sobre datos sensibles. Tendr\xe1 car\xe1cter facultativo las respuestas que versen sobre datos sensibles o sobre datos de las ni\xf1as y ni\xf1os y adolescentes."),l.a.createElement("p",null,l.a.createElement("strong",null,"ATENCI\xd3N DE PETICIONES, CONSULTAS Y RECLAMOS ")),l.a.createElement("p",null,"El \xe1rea de Informaci\xf3n de INTERLEM\u2019D es la dependencia que tiene a cargo dar tr\xe1mite a las solicitudes de los titulares para hacer efectivos sus derechos."),l.a.createElement("p",null,"Domicilio principal en la Carrera 24 No. 23-05. Barrio el Salitre - Yopal Casanare, Rep\xfablica de Colombia. P\xe1gina: https://www.facebook.com/ong.interlemd"),l.a.createElement("p",null,"Tel\xe9fono 3142981372 - 3112520242 en la ciudad de Yopal \u2013 Casanare."),l.a.createElement("p",null,"Correo: \xa0"),l.a.createElement("p",null,l.a.createElement("strong",null,"PROCEDIMIENTO PARA EL EJERCICIO DEL DERECHO DE HABEAS DATA ")),l.a.createElement("p",null,"En cumplimiento de las normas sobre protecci\xf3n de datos personales, INTERLEM\u2019D"),l.a.createElement("p",null,"presenta el procedimiento y requisitos m\xednimos para el ejercicio de sus derechos:"),l.a.createElement("p",null,"Para la radicaci\xf3n y atenci\xf3n de su solicitud le solicitamos suministrar la siguiente informaci\xf3n:"),l.a.createElement("p",null,"Nombre completo y apellidos"),l.a.createElement("p",null,"Datos de contacto (Direcci\xf3n f\xedsica y/o electr\xf3nica y tel\xe9fonos de contacto),"),l.a.createElement("p",null,"Medios para recibir respuesta a su solicitud,"),l.a.createElement("p",null,"Motivo(s)/hecho(s) que dan lugar al reclamo con una breve descripci\xf3n del derecho que desea ejercer (conocer, actualizar, rectificar, solicitar prueba de la autorizaci\xf3n otorgada, revocarla, suprimir, acceder a la informaci\xf3n)"),l.a.createElement("p",null,"Firma (si aplica) y n\xfamero de identificaci\xf3n."),l.a.createElement("p",null,"El t\xe9rmino m\xe1ximo previsto por la ley para resolver su reclamaci\xf3n es de quince (15) d\xedas h\xe1biles, contado a partir del d\xeda siguiente a la fecha de su recibo. Cuando no fuere posible atender el reclamo dentro de dicho t\xe9rmino, INTERLEM\u2019D informar\xe1 al interesado los motivos de la demora y la fecha en que se atender\xe1 su reclamo, la cual en ning\xfan caso podr\xe1 superar los ocho (8) d\xedas h\xe1biles siguientes al vencimiento del primer t\xe9rmino."),l.a.createElement("p",null,"Una vez cumplidos los t\xe9rminos se\xf1alados por la Ley 1581 de 2012 y las dem\xe1s normas que la reglamenten o complementen, el Titular al que se deniegue, total o parcialmente, el ejercicio de los derechos de acceso, actualizaci\xf3n, rectificaci\xf3n, supresi\xf3n y revocaci\xf3n, podr\xe1 poner su caso en conocimiento de la Superintendencia de Industria y Comercio \u2013Delegatura para la Protecci\xf3n de Datos Personales-."),l.a.createElement("p",null,l.a.createElement("strong",null,"VIGENCIA: ")),l.a.createElement("p",null,"La presente Pol\xedtica para el Tratamiento de Datos Personales rige a partir del 01 de enero de 2012."),l.a.createElement("p",null,"Las bases de datos en las que se registrar\xe1n los datos personales tendr\xe1n una vigencia igual al tiempo en que se mantenga y utilice la informaci\xf3n para las finalidades descritas en esta pol\xedtica. Una vez se cumpla(n) esa(s) finalidad(es) y siempre que no exista un deber legal o contractual de conservar su informaci\xf3n, sus datos ser\xe1n eliminados de nuestras bases de datos."),l.a.createElement("p",null,"Los datos personales proporcionados se conservar\xe1n mientras no se solicite su supresi\xf3n por el interesado y siempre que no exista un deber legal de conservarlos."))))}}]),a}(n.Component),D=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement(p.a,null,l.a.createElement(E.a,{path:"/terminos",component:O}),l.a.createElement(E.a,{path:"/home",component:N}),l.a.createElement(E.a,{path:"/principal"},l.a.createElement(g.a,{to:"/home"})),l.a.createElement(E.a,{path:"/"},l.a.createElement(g.a,{to:"/terminos"})),l.a.createElement(E.a,{component:function(){return l.a.createElement("div",null,"404 Not found ")}})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.22335954.chunk.js.map