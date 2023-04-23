# Módulo Final - Projeto Individual (Case 1)

## Obejtivo:
Precisamos montar um MVP para a empresa testar o seu novo app (MVP é a
sigla em inglês para Minimum Viable Product – ou Produto Mínimo Viável).
Para isso vamos construir um app (front e back-end) que vai implementar as
funcionalidades básicas do CRUD.

Montar um App **MVP**(Minimum Viable Product – ou Produto Mínimo Viável).  
Nesse produto devemos implementar a parte de *Front-End* (parte visual), e a *Back-End* (parte do servidor). Nele precisa implementar as funcionabilidades básicas do  
**CRUD** => (**C**REATE - **R**EAD - **U**PDATE - **D**ELETE).  

## Como Proceder:

1. Abra o terminal.

2. Clone o repositorio usando o codigo git clone,usando o codigo abaixo:  
```git clone https://github.com/Gmenezes3/Case-1.git```

3. Após a clonagem do repositorio, abra ele no editor de codigo de sua preferência.

### Back-End:

1. Ao Abrir o Editor, abra o terminal do editor de código.  
 
2. Digite o comando  ```cd ./Backend``` no terminal para que possa entrar na pasta especificada.

3.  Digite o comando ```cd ./Backend/Meu-App``` no terminal para que possa entrar na pagina especificada.

4. Digite no terminal novamente o comando ```npm i``` para que possa baixar as dependências.  

5. Após isso, insira o comando ```npm run dev``` para que o lado do servidor possa começar a rodar.  

### Front-End:

1. Abra um segundo terminal no editor de código

2. digite o comando ```cd ./Frontend``` no terminal para que possa entrar na passa especificada.

3. Digite no terminal novamente, o comando ```npm i``` para que possa baixar as dependencias.

4. Após isso, digite novamente no terminal o comando ```npm run dev``` para que o lado do cliente(visual) possa começar a rodar.

# Tecnologias Utilizadas:

<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="96" height="96"
viewBox="0,0,256,256"
style="fill:#000000;">
<g transform="translate(26.66667,26.66667) scale(0.79167,0.79167)"><g fill="#21a366" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.33333,5.33333)"><path d="M24.007,45.419c-0.574,0 -1.143,-0.15 -1.646,-0.44l-5.24,-3.103c-0.783,-0.438 -0.401,-0.593 -0.143,-0.682c1.044,-0.365 1.255,-0.448 2.369,-1.081c0.117,-0.067 0.27,-0.043 0.39,0.028l4.026,2.389c0.145,0.079 0.352,0.079 0.486,0l15.697,-9.061c0.145,-0.083 0.24,-0.251 0.24,-0.424v-18.113c0,-0.181 -0.094,-0.342 -0.243,-0.432l-15.69,-9.054c-0.145,-0.086 -0.338,-0.086 -0.483,0l-15.688,9.053c-0.152,0.086 -0.249,0.255 -0.249,0.428v18.114c0,0.173 0.094,0.338 0.244,0.42l4.299,2.483c2.334,1.167 3.76,-0.208 3.76,-1.591v-17.877c0,-0.255 0.2,-0.452 0.456,-0.452h1.988c0.248,0 0.452,0.196 0.452,0.452v17.886c0,3.112 -1.697,4.9 -4.648,4.9c-0.908,0 -1.623,0 -3.619,-0.982l-4.118,-2.373c-1.018,-0.59 -1.647,-1.691 -1.647,-2.865v-18.114c0,-1.179 0.629,-2.279 1.646,-2.861l15.714,-9.065c0.994,-0.562 2.314,-0.562 3.301,0l15.694,9.069c1.012,0.585 1.645,1.682 1.645,2.861v18.114c0,1.175 -0.633,2.271 -1.646,2.861l-15.694,9.064c-0.503,0.291 -1.073,0.44 -1.654,0.44"></path><path d="M28.856,32.937c-6.868,0 -8.308,-3.153 -8.308,-5.797c0,-0.251 0.203,-0.452 0.455,-0.452h2.028c0.224,0 0.413,0.163 0.448,0.384c0.306,2.066 1.218,3.108 5.371,3.108c3.308,0 4.715,-0.747 4.715,-2.502c0,-1.01 -0.401,-1.76 -5.54,-2.263c-4.299,-0.424 -6.955,-1.371 -6.955,-4.809c0,-3.167 2.672,-5.053 7.147,-5.053c5.026,0 7.517,1.745 7.831,5.493c0.012,0.13 -0.035,0.255 -0.122,0.35c-0.086,0.09 -0.208,0.145 -0.334,0.145h-2.039c-0.212,0 -0.397,-0.149 -0.44,-0.354c-0.491,-2.173 -1.678,-2.868 -4.904,-2.868c-3.611,0 -4.031,1.257 -4.031,2.2c0,1.143 0.495,1.477 5.367,2.122c4.825,0.64 7.116,1.544 7.116,4.935c0,3.418 -2.853,5.379 -7.827,5.379"></path></g></g></g>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="96" height="96"
viewBox="0 0 48 48">
<path fill="#212121" d="M23.697,37.56h1.18c0.84,0,1.631-0.392,2.139-1.061l7.485-9.847l7.485,9.847	c0.508,0.668,1.299,1.061,2.139,1.061h1.18L35.756,25l9.121-12h-1.18c-0.84,0-1.631,0.392-2.139,1.061L34.5,23.347l-7.059-9.287	C26.933,13.392,26.142,13,25.302,13h-1.18l9.121,12L23.697,37.56z"></path><path fill="#212121" d="M24,26v-3c0-6.675-5.945-11.961-12.829-10.852C5.812,13.011,2,17.857,2,23.284L2,24v2v0.142	c0,6.553,4.777,11.786,10.868,11.858c5.092,0.06,9.389-3.344,10.707-7.999h-1.028c-0.62,0-1.182,0.355-1.451,0.913	c-1.739,3.595-5.789,5.862-10.228,4.842C6.776,34.815,4,30.981,4,26.783V26H24z M4,23.71c0-4.708,2.804-8.557,6.924-9.478	C16.798,12.92,22,17.352,22,23v1H4V23.71z"></path>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="96" height="96"
viewBox="0,0,256,256"
style="fill:#000000;">
<g fill="#39c1d7" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(3.2,3.2)"><path d="M46.5,40c0,3.593 -2.907,6.5 -6.5,6.5c-3.593,0 -6.5,-2.907 -6.5,-6.5c0,-3.593 2.907,-6.5 6.5,-6.5c3.593,0 6.5,2.907 6.5,6.5z"></path><path d="M40,47c-3.859,0 -7,-3.14 -7,-7c0,-3.86 3.141,-7 7,-7c3.859,0 7,3.14 7,7c0,3.86 -3.141,7 -7,7zM40,34c-3.309,0 -6,2.691 -6,6c0,3.309 2.691,6 6,6c3.309,0 6,-2.691 6,-6c0,-3.309 -2.691,-6 -6,-6z"></path><g><path d="M24.474,75.503c-1.711,0 -3.269,-0.392 -4.632,-1.164c-2.28,-1.293 -3.856,-3.521 -4.686,-6.62c-0.965,-3.607 -0.85,-8.398 0.332,-13.878c-9.532,-3.279 -14.988,-8.31 -14.988,-13.841c0,-5.532 5.455,-10.562 14.987,-13.84c-1.182,-5.481 -1.298,-10.272 -0.333,-13.879c0.83,-3.1 2.406,-5.328 4.685,-6.62c1.362,-0.772 2.921,-1.164 4.632,-1.164c4.388,0 9.891,2.73 15.531,7.698c5.64,-4.963 11.141,-7.691 15.524,-7.691c1.711,0 3.269,0.392 4.632,1.164c2.277,1.291 3.854,3.515 4.684,6.611c0.966,3.606 0.85,8.398 -0.333,13.88c9.534,3.278 14.991,8.309 14.991,13.841c0,5.532 -5.457,10.563 -14.991,13.842c1.182,5.481 1.298,10.272 0.332,13.878c-0.83,3.097 -2.405,5.321 -4.68,6.612c-1.364,0.772 -2.923,1.164 -4.633,1.164c-4.386,0 -9.889,-2.728 -15.527,-7.689c-5.64,4.967 -11.142,7.696 -15.527,7.696zM19.337,55.006c-0.991,4.717 -1.102,8.747 -0.316,11.679c0.542,2.026 1.481,3.431 2.794,4.175c0.753,0.427 1.648,0.644 2.659,0.644c3.394,0 7.862,-2.282 12.621,-6.437c-2.385,-2.402 -4.713,-5.121 -6.928,-8.091c-3.831,-0.416 -7.471,-1.078 -10.83,-1.97zM42.906,65.065c4.758,4.151 9.227,6.431 12.621,6.432c1.011,0 1.906,-0.217 2.661,-0.644c1.309,-0.742 2.246,-2.144 2.787,-4.167c0.786,-2.934 0.676,-6.963 -0.315,-11.679c-3.362,0.892 -7.003,1.554 -10.833,1.97c-2.214,2.97 -4.539,5.688 -6.921,8.088zM35.566,57.393c1.452,1.776 2.938,3.433 4.434,4.94c1.492,-1.506 2.979,-3.163 4.43,-4.94c-1.491,0.071 -2.976,0.107 -4.43,0.107c-1.455,0 -2.941,-0.036 -4.434,-0.107zM32.349,53.179c2.495,0.213 5.068,0.321 7.651,0.321c2.585,0 5.155,-0.108 7.646,-0.32c1.486,-2.084 2.903,-4.268 4.214,-6.495c1.268,-2.155 2.461,-4.404 3.547,-6.686c-1.083,-2.276 -2.275,-4.524 -3.546,-6.684c-1.308,-2.222 -2.725,-4.406 -4.215,-6.495c-2.489,-0.212 -5.059,-0.32 -7.646,-0.32c-2.588,0 -5.159,0.108 -7.647,0.321c-1.49,2.086 -2.909,4.27 -4.219,6.495c-1.27,2.159 -2.462,4.407 -3.546,6.686c1.082,2.274 2.274,4.522 3.545,6.684c1.304,2.215 2.721,4.398 4.216,6.493zM57.491,44.779c-0.706,1.346 -1.438,2.666 -2.185,3.934c-0.753,1.282 -1.554,2.568 -2.386,3.836c2.374,-0.366 4.645,-0.835 6.771,-1.4c-0.59,-2.049 -1.329,-4.186 -2.2,-6.37zM20.304,51.148c2.127,0.564 4.397,1.034 6.768,1.4c-0.837,-1.276 -1.638,-2.563 -2.386,-3.835c-0.745,-1.267 -1.478,-2.585 -2.183,-3.931c-0.867,2.174 -1.605,4.309 -2.199,6.366zM59.816,40c1.528,3.391 2.773,6.743 3.708,9.977c7.402,-2.604 11.976,-6.403 11.976,-9.977c0,-3.574 -4.574,-7.373 -11.976,-9.977c-0.933,3.234 -2.179,6.586 -3.708,9.977zM16.472,30.025c-7.399,2.603 -11.972,6.402 -11.972,9.975c0,3.574 4.573,7.373 11.974,9.976c0.934,-3.235 2.179,-6.587 3.705,-9.974c-1.527,-3.388 -2.772,-6.74 -3.707,-9.977zM20.303,28.852c0.594,2.054 1.332,4.19 2.2,6.368c0.704,-1.342 1.436,-2.661 2.184,-3.932c0.752,-1.279 1.553,-2.565 2.388,-3.836c-2.374,0.365 -4.644,0.835 -6.772,1.4zM52.922,27.451c0.837,1.277 1.638,2.563 2.386,3.837c0.746,1.267 1.479,2.586 2.185,3.932c0.869,-2.177 1.607,-4.313 2.201,-6.369c-2.13,-0.565 -4.4,-1.035 -6.772,-1.4zM24.471,8.497c-1.011,0 -1.905,0.216 -2.657,0.644c-1.312,0.744 -2.252,2.149 -2.795,4.175c-0.785,2.935 -0.675,6.964 0.317,11.679c3.36,-0.892 7.002,-1.555 10.834,-1.971c2.217,-2.971 4.545,-5.688 6.927,-8.088c-4.76,-4.157 -9.231,-6.439 -12.626,-6.439zM49.828,23.023c3.83,0.416 7.471,1.078 10.833,1.97c0.992,-4.716 1.103,-8.746 0.316,-11.68c-0.542,-2.022 -1.48,-3.424 -2.79,-4.166c-0.754,-0.427 -1.649,-0.644 -2.661,-0.644c-3.393,0 -7.86,2.281 -12.619,6.433c2.38,2.399 4.706,5.117 6.921,8.087zM40,22.5c1.454,0 2.939,0.036 4.431,0.107c-1.45,-1.774 -2.936,-3.43 -4.429,-4.938c-1.497,1.51 -2.982,3.166 -4.432,4.938c1.491,-0.071 2.976,-0.107 4.43,-0.107z"></path><path d="M24.471,4.997c4.494,0 9.996,2.91 15.532,7.867c5.535,-4.953 11.034,-7.86 15.524,-7.86c1.623,0 3.099,0.37 4.386,1.099c2.156,1.222 3.652,3.343 4.446,6.306c1.077,3.917 0.851,8.74 -0.434,14.08c9.222,3.081 15.075,7.942 15.075,13.511c0,5.569 -5.853,10.43 -15.076,13.512c1.341,5.773 1.566,10.726 0.434,14.079c-0.794,2.962 -2.289,5.084 -4.443,6.306c-1.289,0.73 -2.46,1.103 -4.082,1.103c-0.001,0 -0.416,0 -0.417,0c-4.492,0 -9.882,-2.91 -15.416,-7.861c-5.535,4.956 -11.035,7.864 -15.527,7.864c-1.623,0 -3.099,-0.37 -4.386,-1.099c-2.158,-1.225 -3.655,-3.349 -4.448,-6.314c-1.19,-3.717 -0.95,-8.603 0.434,-14.079c-9.221,-3.082 -15.073,-7.942 -15.073,-13.511c0,-5.568 5.852,-10.429 15.072,-13.511c-0.687,-3.059 -1.126,-5.899 -1.141,-8.489c-0.012,-2.046 0.267,-3.949 0.707,-5.59c0.794,-2.966 2.29,-5.09 4.448,-6.314c1.286,-0.73 2.762,-1.099 4.385,-1.099M18.958,25.614c3.477,-0.955 7.338,-1.677 11.483,-2.117c2.382,-3.21 4.875,-6.096 7.386,-8.584c-4.872,-4.346 -9.616,-6.917 -13.356,-6.917c-1.099,0 -2.075,0.238 -2.904,0.709c-1.433,0.813 -2.452,2.32 -3.031,4.481c-0.858,3.202 -0.663,7.53 0.422,12.428M61.039,25.613c1.085,-4.898 1.28,-9.227 0.422,-12.429c-0.578,-2.157 -1.597,-3.661 -3.027,-4.472c-0.83,-0.471 -1.809,-0.709 -2.907,-0.709c-3.737,0 -8.478,2.568 -13.349,6.91c2.51,2.488 5,5.374 7.38,8.583c4.143,0.44 8.004,1.162 11.481,2.117M34.477,23.166c1.802,-0.107 3.609,-0.2 5.488,-0.2c1.879,0 3.755,0.094 5.557,0.2c-1.808,-2.279 -3.664,-4.361 -5.521,-6.204c-1.857,1.843 -3.714,3.925 -5.524,6.204M40,54c2.761,0 5.404,-0.121 7.918,-0.342c1.519,-2.117 2.988,-4.365 4.372,-6.719c1.353,-2.299 2.577,-4.626 3.67,-6.939c-1.093,-2.313 -2.317,-4.639 -3.669,-6.937c-1.385,-2.355 -2.853,-4.602 -4.373,-6.719c-2.513,-0.223 -5.156,-0.344 -7.918,-0.344c-2.762,0 -5.406,0.121 -7.92,0.343c-1.521,2.117 -2.991,4.365 -4.376,6.719c-1.352,2.299 -2.576,4.626 -3.669,6.939c1.093,2.313 2.316,4.639 3.668,6.937c1.385,2.354 2.854,4.602 4.374,6.719c2.515,0.222 5.16,0.343 7.923,0.343M57.546,36.413c1.125,-2.709 2.056,-5.369 2.766,-7.913c-2.553,-0.702 -5.373,-1.282 -8.428,-1.707c1.028,1.527 2.029,3.11 2.992,4.748c0.954,1.619 1.841,3.247 2.67,4.872M22.449,36.414c0.828,-1.625 1.716,-3.253 2.668,-4.873c0.964,-1.638 1.966,-3.22 2.995,-4.747c-3.055,0.424 -5.875,1.005 -8.428,1.707c0.71,2.544 1.641,5.203 2.765,7.913M63.188,50.622c8.076,-2.736 12.812,-6.756 12.812,-10.622c0,-3.866 -4.736,-7.886 -12.812,-10.622c-0.953,3.405 -2.269,6.983 -3.92,10.621c1.651,3.639 2.967,7.217 3.92,10.623M16.81,50.621c0.952,-3.404 2.267,-6.982 3.918,-10.619c-1.651,-3.638 -2.967,-7.217 -3.919,-10.622c-8.075,2.736 -12.809,6.755 -12.809,10.62c0,3.866 4.735,7.885 12.81,10.621M51.884,53.207c3.055,-0.424 5.875,-1.004 8.428,-1.707c-0.711,-2.544 -1.642,-5.204 -2.766,-7.914c-0.829,1.625 -1.717,3.253 -2.67,4.873c-0.963,1.638 -1.964,3.221 -2.992,4.748M28.109,53.206c-1.028,-1.527 -2.029,-3.109 -2.993,-4.746c-0.952,-1.619 -1.839,-3.246 -2.667,-4.87c-1.124,2.708 -2.054,5.367 -2.764,7.91c2.552,0.701 5.371,1.281 8.424,1.706M24.474,72.003c3.739,0 8.481,-2.57 13.352,-6.914c-2.513,-2.489 -5.005,-5.376 -7.388,-8.587c-4.143,-0.439 -8.002,-1.161 -11.478,-2.116c-1.084,4.898 -1.279,9.226 -0.422,12.428c0.578,2.16 1.598,3.667 3.03,4.48c0.828,0.471 1.807,0.709 2.906,0.709M55.527,71.997v0c1.099,0 2.076,-0.238 2.907,-0.709c1.43,-0.811 2.447,-2.315 3.024,-4.473c0.858,-3.203 0.663,-7.531 -0.421,-12.428c-3.477,0.955 -7.337,1.677 -11.481,2.116c-2.38,3.21 -4.871,6.096 -7.381,8.585c4.871,4.34 9.613,6.908 13.352,6.909M40,63.04c1.857,-1.844 3.713,-3.927 5.522,-6.206c-1.801,0.107 -3.559,0.333 -5.439,0.333c-1.881,0 -3.807,-0.226 -5.609,-0.333c1.81,2.28 3.668,4.363 5.526,6.206M24.116,4.072c-1.799,0 -3.085,0.338 -4.523,1.153c-2.399,1.361 -4.055,3.691 -4.921,6.926c-0.96,3.587 -0.877,8.302 0.236,13.681c-9.489,3.357 -14.908,8.493 -14.908,14.168c0,5.676 5.42,10.811 14.909,14.168c-1.113,5.379 -1.196,10.094 -0.235,13.681c0.865,3.233 2.52,5.563 4.921,6.926c1.44,0.816 3.17,1.163 4.968,1.163c4.487,0 9.753,-2.535 15.438,-7.466c5.684,4.926 11.039,7.524 15.525,7.525c1.799,0 3.441,-0.413 4.881,-1.229c2.397,-1.359 4.051,-3.686 4.916,-6.917c0.961,-3.588 0.878,-8.303 -0.235,-13.681c9.491,-3.358 14.912,-8.494 14.912,-14.17c0,-5.676 -5.42,-10.812 -14.911,-14.169c1.114,-5.38 1.196,-10.095 0.235,-13.682c-0.866,-3.231 -2.521,-5.558 -4.919,-6.917c-1.439,-0.815 -3.081,-1.229 -4.879,-1.229c-4.485,0 -9.839,2.599 -15.524,7.527c-5.686,-4.932 -11.066,-7.461 -15.554,-7.461zM19.72,24.377c-0.462,-2.324 -0.772,-4.502 -0.789,-6.412c-0.015,-1.72 0.221,-3.217 0.57,-4.521c0.507,-1.892 1.368,-3.194 2.559,-3.87c0.676,-0.384 1.5,-0.644 2.423,-0.644c3.181,0 7.367,2.178 11.883,6.034c-2.221,2.273 -4.392,4.819 -6.466,7.585c-3.585,0.4 -7.003,1.013 -10.18,1.828zM43.638,14.966c4.515,-3.853 8.711,-5.963 11.888,-5.963c0.924,0 1.737,0.195 2.414,0.579c1.189,0.674 2.049,1.973 2.555,3.861c0.874,2.818 0.761,6.564 -0.218,10.933c-3.177,-0.814 -6.594,-1.428 -10.178,-1.826c-2.073,-2.765 -4.242,-5.311 -6.461,-7.584zM36.673,22.06c1.096,-1.3 2.209,-2.53 3.328,-3.678c1.119,1.148 2.231,2.378 3.326,3.678c-1.119,-0.04 -2.232,-0.06 -3.327,-0.06c-1.095,0 -2.207,0.02 -3.327,0.06zM32.625,27.3c2.405,-0.199 4.883,-0.341 7.375,-0.341c2.491,0 4.969,0.142 7.373,0.341c1.432,2.019 2.796,4.126 4.056,6.269c1.222,2.078 2.373,4.239 3.423,6.43c-1.051,2.192 -2.202,4.354 -3.424,6.432c-1.261,2.144 -2.624,4.25 -4.056,6.269c-2.403,0.199 -4.881,0.466 -7.372,0.466c-2.493,0 -4.972,-0.268 -7.378,-0.467c-1.433,-2.018 -2.797,-4.125 -4.058,-6.269c-1.222,-2.077 -2.372,-4.238 -3.422,-6.43c1.05,-2.192 2.201,-4.354 3.423,-6.432c1.262,-2.143 2.627,-4.25 4.06,-6.268zM57.422,34.024c-0.549,-1.018 -1.112,-2.018 -1.683,-2.99c-0.57,-0.969 -1.167,-1.942 -1.785,-2.909c1.774,0.302 3.485,0.663 5.114,1.08c-0.467,1.566 -1.018,3.178 -1.646,4.819zM20.928,29.205c1.629,-0.417 3.34,-0.778 5.114,-1.08c-0.619,0.967 -1.216,1.94 -1.786,2.908c-0.571,0.972 -1.134,1.972 -1.683,2.99c-0.628,-1.639 -1.178,-3.251 -1.645,-4.818zM60.365,39.999c1.415,-3.162 2.587,-6.292 3.49,-9.326c6.903,2.519 11.145,6.048 11.145,9.327c0,3.279 -4.242,6.808 -11.145,9.327c-0.904,-3.035 -2.075,-6.166 -3.49,-9.328zM16.142,49.326c-6.901,-2.519 -11.142,-6.048 -11.142,-9.326c0,-3.278 4.241,-6.807 11.141,-9.326c0.903,3.035 2.074,6.165 3.489,9.327c-1.414,3.161 -2.585,6.291 -3.488,9.325zM53.953,51.876c0.618,-0.968 1.216,-1.941 1.785,-2.909c0.572,-0.972 1.135,-1.973 1.684,-2.991c0.628,1.641 1.178,3.254 1.646,4.821c-1.63,0.415 -3.341,0.777 -5.115,1.079zM20.929,50.795c0.467,-1.566 1.017,-3.177 1.644,-4.816c0.548,1.017 1.111,2.017 1.682,2.988c0.569,0.968 1.166,1.94 1.785,2.908c-1.773,-0.303 -3.483,-0.664 -5.111,-1.08zM24.474,71.003c-0.924,0 -1.736,-0.195 -2.413,-0.579c-1.19,-0.676 -2.051,-1.977 -2.557,-3.869c-0.831,-2.845 -0.737,-6.592 0.218,-10.933c3.176,0.814 6.592,1.428 10.175,1.826c2.075,2.766 4.246,5.313 6.468,7.588c-4.515,3.857 -8.712,5.968 -11.891,5.967v0zM50.098,57.45c3.584,-0.399 7.001,-1.012 10.178,-1.826c1.105,4.74 1.192,8.518 0.217,10.932c-0.505,1.889 -1.364,3.188 -2.552,3.861c-0.678,0.384 -1.49,0.579 -2.413,0.579v1l-0.001,-1c-3.18,0 -7.377,-2.11 -11.891,-5.961c2.22,-2.273 4.389,-4.819 6.462,-7.585zM40,61.62c-1.12,-1.148 -2.234,-2.379 -3.33,-3.68c1.12,0.04 2.234,0.06 3.33,0.06c1.095,0 2.208,-0.02 3.327,-0.06c-1.095,1.301 -2.208,2.532 -3.327,3.68z"></path></g></g></g>
</svg>
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFAklEQVR4nO2dTYhcRRDH35oYjR8IXlT0IKIiazzoojtT9ZJBRNyDBGa62ygGDCI5GSRqMlVj8HkRBGPIEvH7KxcF8SCI5mAELx48iGjiB4KIkOjFD/wANdnNSL2ssLvZdXqzr19P0vWHOr/h/+uq7nn9ujrL5sk1utcZoN0W+KAB/tMi9zX4pD0oPSy9pN3tJq/JFtPExJazDNIzBmlaDecgg84AT1mgp91osWruqB8tVhnkD9R4riXbxes5EGTkq/lca6k1wHtm1XyeUgBcN4Apg9uvzSzypJrPkRYatCszQF8oAI4F4IAA+EMBcCQA/HsW8eF9De4rAIw7EBQAKoB+bBM0AzC+EVqCMM3QOQAVQD+2CZoBGN8ILUGYZugcgAqgH9uEJDLAIH9ngb+tKwzSz6fCPkdtAFyjuDCLINcqzjPN7vUWuvdZ5GdLQENgfDIAFtCIy7llgPYa5CMKIKI25HS1BdqvGRBXIw75gVjzRYolaEEZ5DtifBOlAGbJIu9QABHlnFthkD5NNgNarWJlJ6crlhOu0btUlp4nDQFofbIANox3L6/qeQb4ewv8eqfZu20pAIqsOMMgHVIAWB18A7xvKYsAA/SSAsCqs5A+khrvBQC79yoADFAKge72AdBpdtcpAAwyF73rBWDdjqsUAAbJgF99AMhKSgFgkAzou8bW1YMB0JUKAMMAuHOcLxoEoN2kGxUAhgEgZ+EGZgD0NikArN58g3zYZw6o88hWYgDoVZ/XIQb4RwWAlZs/LVuTgwDYnFxd5ieVAQb5sUHPl6OjFugbBYCVGn/EAPcGmV+Oftm0r3H0n9YZYJB+k5pfHgX1kIPetrrNHzoAG2996NyyBi8jTJNvEdN9X7xtHtt8pgHaGcP8oQNQt1xOYxbok1jmJwug1SpWWuDXLPKxmOYnC+A/CPKBlnQvMUB/KYCIaq/tXWKRXtAMiCyT0111dw5ItgQtJtnEt0BHkwTgGltXG+Dnlx/0nAV+wgJvMTmNS70f9Ow5vwPp/jQBjHUvCPJ8oB8c0CP3tIqzPRmMGKSPFQBWDuIz2e/1y4JurgAwzEkdn10xkUH+XEsQBoHwoheAnLoKAIPMCUdd6+GLvV5VBJ4b05iEcYEsAN448PeU7TzpHwWAIbKAn/QpQ9LXTQFgiAygvT4ADNCHCgDjAbDIbysADAJgpxcA4DcVAAZYFEBvk18J4n0KACse/UjT7Zu2X+YFAPlLBYCVA3jDx3x5d2SB/1YAWCmAn+Qwnw+AcscsQPlL9o+YAf5FTr9knipvElEAXIX5xyzwO/Ldka/5JQCkr5MCsB62nV9JvyCkr+RQnkV+ywE92GnyNdkS5XKaqMOXoQIwLDp+n07Y1Y8C+B9ZoJfrGpiaAfNkkR6vy3wFMEu3jxXnGORX6jRfAczo+Ae94Vc8CmCeOsA3W6D3YhifZAY451bINqMDfjTWiI8GoL22d8NyewF1fPoF5TwqJndyRoPckY+sZu7GfF/+Ccc2PBoADVYAdggHgmYAKoB+bBM0AzC+EVqCMM3QOQAVQD+2CZoBGN8ILUGYZugcgJEB6IXOHM18aSiiV5pj/CvNg3/7osGLZAA/lbWbvOZUuO7JnmYhnsur83KjQhpWxP5BNr2YnN8rLeptQjalANovnp94IA14j5YjDmb8jLeTJ5g/W9LuyyLtkhlal6hcgenSfYUOyIS7UP+6fwG0tArE3kv0EQAAAABJRU5ErkJggg==">