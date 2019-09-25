<template>
    <footer class="footer-bs">
        <div class="row">
        	<div class="col-md-3 footer-brand animated fadeInLeft">
            	<h2><img src="../assets/images/logo.png" alt=""></h2>
                <p class="m-0 p-0">Aros Byggsmide AB</p>
                <p class="m-0 p-0">Transformatorgatan 10</p>
                <p class="m-0 p-0">721 37 Västerås</p>
                <p class="m-0 p-0">Tfn 021 13 22 11</p>
                <p class="m-0 p-0">Fax 021 12 43 35</p>
                <p class="m-0 p-0">e-post: info@arosbyggsmide.se</p>
            </div>
        	<div class="col-md-4 footer-nav animated fadeInUp menu">
            	<h4>Länkar</h4>
            	<div class="col-md-6 text-left">
                    <ul class="pages small">
                        <li>Tommy Lindgren, 070 688 47 07, tommy@arosbyggsmide.se</li>
                        <li>Micke Lindgren, 070 643 33 26, micke@arosbyggsmide.se</li>
                        <li>Jessica Lindgren, jessica@arosbyggsmide.se</li>
                        <li>Daniel Holmgren, 072 214 70 77, daniel@arosbyggsmide.se</li>
                   </ul>
               </div>
           	    <div class="col-md-6 text-left">
                    <ul class="list">
                        <li><router-link to="/">Om oss</router-link></li>
                        <li><router-link to="/">Kontakta</router-link></li>
                        <li><router-link to="/">Terms & Condition</router-link></li>
                        <li><router-link to="/">Privacy Policy</router-link></li>
                    </ul>
                </div>
            </div>
        	<div class="col-md-2 footer-social animated fadeInDown">
            	<h4>Följ oss på social medier</h4>
            	<ul>
                	<li><router-link :to="{path: 'https://facebook.se'}"><i class="fab fa-facebook-square fa-2x"></i></router-link></li>
                	<li><router-link :to="{path: 'https://twitter.com'}"><i class="fab fa-twitter-square fa-2x"></i></router-link></li>
                	<li><router-link :to="{path: 'https://instagram.com'}"><i class="fab fa-instagram fa-2x"></i></router-link></li>
                </ul>
            </div>
        	<div class="col-md-3 footer-ns animated fadeInRight">
            	<h4>Nyhetsbrev</h4>
                <p>Här kan ni anmäla er till vårt nyhetsbrev med kampanjer, prislistor osv.</p>
                
                    <div class="input-group">
                      <input type="text" class="form-control mt-3" placeholder="Anmäl er till vårt nyhetsbrev">
                      <span class="input-group-btn">
                        <button class="btn btn-default" type="button" style="font-size: 1.5rem; color: white;"><i class="fas fa-arrow-circle-right fa-2x"></i></button>
                      </span>
                    </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style  scoped>
.menu {
    display: flex;
    flex-direction: row
}
.footer-bs {
    background-color: #3c3d41;
	padding: 10px 40px;
	color: rgba(255,255,255,1.00);
	margin-bottom: 20px;
	border-bottom-right-radius: 6px;
	border-top-left-radius: 0px;
	border-bottom-left-radius: 6px;
}
.footer-bs p {
    padding: 0;
}
.footer-bs .footer-brand, .footer-bs .footer-nav, .footer-bs .footer-social, .footer-bs .footer-ns { padding:10px 25px; }
.footer-bs .footer-nav, .footer-bs .footer-social, .footer-bs .footer-ns { border-color: transparent; }
.footer-bs .footer-brand h2 { margin:0px 0px 10px; }
.footer-bs .footer-brand p { font-size:12px; color:rgba(255,255,255,0.70); }

.footer-bs .footer-nav ul.pages { list-style:none; padding:0px; }
.footer-bs .footer-nav ul.pages li { padding:5px 0px;}
.footer-bs .footer-nav ul.pages a { color:rgba(255,255,255,1.00); font-weight:bold; text-transform:uppercase; }
.footer-bs .footer-nav ul.pages a:hover { color:rgba(255,255,255,0.80); text-decoration:none; }
.footer-bs .footer-nav h4 {
	font-size: 11px;
	text-transform: uppercase;
	letter-spacing: 3px;
	margin-bottom:10px;
}

.footer-bs .footer-nav ul.list { list-style:none; padding:0px; }
.footer-bs .footer-nav ul.list li { padding:5px 0px;}
.footer-bs .footer-nav ul.list a { color:rgba(255,255,255,0.80); }
.footer-bs .footer-nav ul.list a:hover { color:rgba(255,255,255,0.60); text-decoration:none; }

.footer-bs .footer-social ul { list-style:none; padding:0px; }
.footer-bs .footer-social h4 {
	font-size: 11px;
	text-transform: uppercase;
	letter-spacing: 3px;
}
.footer-bs .footer-social li { padding:5px 4px;}
.footer-bs .footer-social a { color:rgba(255,255,255,1.00);}
.footer-bs .footer-social a:hover { color:rgba(255,255,255,0.80); text-decoration:none; }

.footer-bs .footer-ns h4 {
	font-size: 11px;
	text-transform: uppercase;
	letter-spacing: 3px;
	margin-bottom:10px;
}
.footer-bs .footer-ns p { font-size:12px; color:rgba(255,255,255,0.70); }

@media (min-width: 768px) {
	.footer-bs .footer-nav, .footer-bs .footer-social, .footer-bs .footer-ns { border-left:solid 1px rgba(255,255,255,0.10); }
}

</style>