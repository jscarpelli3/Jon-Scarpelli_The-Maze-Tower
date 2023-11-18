for (const item of items) {
    if (item === 'skip') {
      continue; // Skip this item
    }
    if (item === 'stop') {
      break; // Exit the loop
    }
    console.log(item);
  }
  

  for (const item of items) {
    if (item === 'stop') {
      break; // Exit the loop as soon as 'stop' is found
    }
    console.log(item);
  }
  

  const text = 'Hello';
for (const char of text) {
  console.log(char);
}


const myMap = new Map([
    ['key1', 'value1'],
    ['key2', 'value2']
  ]);
  
  for (const [key, value] of myMap) {
    console.log(`${key}: ${value}`);
  }


  const myIterable = {
    [Symbol.iterator]: function* () {
      yield 1;
      yield 2;
      yield 3;
    }
  };
  
  for (const item of myIterable) {
    console.log(item);
  }
  



  Symbol.iterator is a built-in symbol in JavaScript that represents the default iterator method for an object. It is used to define how an object should be iterated, and it's a fundamental part of the Iterable protocol in JavaScript.

  Here's how Symbol.iterator is typically used:
  
  Iterable Objects: Objects that have a [Symbol.iterator] method are considered iterable. An iterable object is one that can be iterated over in a predictable way.
  
  Iteration Protocol: An iterable object defines the iteration protocol for that object, which specifies how to obtain an iterator for the object.
  
  Iterators: An iterator is an object that provides a way to traverse the elements of an iterable object. It should have a next method that returns an object with properties like value and done.
  
  Here's an example of how Symbol.iterator can be used to make an object iterable:
  
  javascript
  Copy code
  const myIterable = {
    [Symbol.iterator]: function () {
      let index = 0;
      const elements = [1, 2, 3];
  
      return {
        next: function () {
          if (index < elements.length) {
            return { value: elements[index++], done: false };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
  
  // Using the iterable object
  for (const item of myIterable) {
    console.log(item);
  }
  In this example, myIterable is an iterable object. It defines the [Symbol.iterator] method that returns an iterator object. The iterator has a next method that controls the iteration process.
  
  When you use the for...of loop to iterate over myIterable, it utilizes the Symbol.iterator protocol to obtain an iterator and traverse the elements.
  
  Symbol.iterator is a powerful feature in JavaScript, allowing you to make custom objects iterable, and it's widely used in JavaScript for working with iterables, including arrays, maps, sets, and other iterable data structures.

  





  
<body class="portfolio-template-default single single-portfolio postid-3073 skin-default sidebar-none default_width no-home tb_animation_on ready-view header-horizontal fixed-header-enabled footer-horizontal-left search-off menu-dropdown revealing-footer single-fullwidth-layout filter-hover-none filter-featured-only sidemenu-active themify-no-overflow-x mobile_menu_active">
<a class="screen-reader-text skip-to-content" href="#content">Skip to content</a><svg id="tf_svg" style="display:none"><defs></defs></svg><script> </script><div id="pagewrap" class="tf_box hfeed site">
					<div id="headerwrap" class="tf_box tf_w" style="top: 0px;">

			
										                                                    <div class="header-icons tf_hide">
                                <a id="menu-icon" class="tf_inline_b tf_text_dec" href="#mobile-menu" aria-label="Menu"><span class="menu-icon-inner tf_inline_b tf_vmiddle tf_overflow"></span><span class="screen-reader-text">Menu</span></a>
				                            </div>
                        
			<header id="header" class="tf_box pagewidth tf_clearfix" itemscope="itemscope" itemtype="https://schema.org/WPHeader">

	            
	            <div class="header-bar tf_box">
				    <div id="site-logo"><a href="https://avenue23dev.wpengine.com" title="Avenue"><img src="https://avenue23dev.wpengine.com/wp-content/uploads/avenue_inc_logo_white.png" alt="Avenue Inc." class="tf_sticky_logo" width="139" height="29"><img src="https://avenue23dev.wpengine.com/wp-content/uploads/avenue_inc_logo.png" alt="Avenue Inc." title="avenue_inc_logo" width="" height="" class="site-logo-image" data-tf-not-load="1" importance="high"></a></div><div id="site-description" class="site-description"><span></span></div>				</div>
				<!-- /.header-bar -->

									<div id="mobile-menu" class="sidemenu sidemenu-off tf_scrollbar">
												
						<div class="navbar-wrapper tf_clearfix">
                            																						<div class="social-widget tf_inline_b tf_vmiddle">
																	    								</div>
								<!-- /.social-widget -->
							
							
							
							<nav id="main-nav-wrap" itemscope="itemscope" itemtype="https://schema.org/SiteNavigationElement">
								<ul id="main-nav" class="main-nav tf_clearfix tf_box" data-init="true"><li class="menu-item-page-34 menu-item menu-item-type-post_type menu-item-object-page menu-item-48"><a href="https://avenue23dev.wpengine.com/about/">About</a> </li>
<li class="menu-item-page-36 menu-item menu-item-type-post_type menu-item-object-page menu-item-47"><a href="https://avenue23dev.wpengine.com/services/">Services</a> </li>
<li class="menu-item-page-38 menu-item menu-item-type-post_type menu-item-object-page menu-item-46"><a href="https://avenue23dev.wpengine.com/work/">Work</a> </li>
<li class="menu-item-page-40 menu-item menu-item-type-post_type menu-item-object-page menu-item-45"><a href="https://avenue23dev.wpengine.com/are-we-a-fit/">Fit</a> </li>
<li class="menu-item-page-42 menu-item menu-item-type-post_type menu-item-object-page menu-item-44"><a href="https://avenue23dev.wpengine.com/b2b-ideas/">Ideas</a> </li>
</ul>							</nav>
							<!-- /#main-nav-wrap -->
                                                    </div>

																				<!-- /header-widgets -->
						
							<a id="menu-icon-close" aria-label="Close menu" class="tf_close tf_hide" href="#"><span class="screen-reader-text">Close Menu</span></a>

																	</div><!-- #mobile-menu -->
                     					<!-- /#mobile-menu -->
				
				
				
			</header>
			<!-- /#header -->
				        
		</div><div class="tf_hidden tf_w" style="height: 0px; contain: strict;"></div>
		<!-- /#headerwrap -->
	
	<div id="body" class="tf_box tf_clear tf_mw tf_clearfix" style="background-color: rgb(255, 255, 255);">
		
		    <div class="featured-area tf_textc fullcover">
				<figure class="post-image tf_clearfix is_video">
			    								<img src="https://avenue23dev.wpengine.com/wp-content/uploads/transunion-case-study-1024x477-1024x585.jpg" width="1024" height="585" class="wp-post-image wp-image-2047" title="transunion-case-study" data-tf-not-load="1" loading="eager" decoding="sync" alt="TransUnion case study" srcset="https://avenue23dev.wpengine.com/wp-content/uploads/transunion-case-study-1024x477-1024x585.jpg 1024w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion-case-study-1024x477-561x321.jpg 561w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion-case-study-1024x477-360x205.jpg 360w" sizes="(max-width: 1024px) 100vw, 1024px">							    			</figure>
			<div class="post-content">

	
		
	
						</div>
    </div>
        <!-- layout-container -->
    <div id="layout" class="pagewidth tf_box tf_clearfix">
	<!-- content -->
<main id="content" class="tf_box tf_clearfix">
        
	
        <article id="post-3073" class="post tf_clearfix post-3073 portfolio type-portfolio status-publish has-post-thumbnail hentry portfolio-category-case-studies portfolio-category-featured no-post-title no-post-date has-post-category has-post-tag has-post-comment has-post-author">
	        	<div class="post-content">
			<div class="entry-content themify-no-overflow-x">

        				<style id="themify-builder-3073-generated-cffonts">@font-face{
	font-family:'graphik';
	font-style:normal;
	font-weight:700;
	font-display:swap;
	src:url('/wp-content/uploads/Graphik-Bold-Web.woff') format('woff')
}
</style>
<!--themify_builder_content-->
<div id="themify_builder_content-3073" data-postid="3073" class="themify_builder_content themify_builder_content-3073 themify_builder tf_clear">
    				<!-- module_row -->
		<div data-css_id="iob1555" class="module_row themify_builder_row inner-width fullwidth tb_iob1555 tb_first tf_w tf_clearfix wow" style="visibility: visible; animation-name: slideInUp;" data-fullwidth-done="1">
					<div class="row_inner col_align_top tb_col_count_2 tf_box tf_rel">
					<div class="module_column tb-column col3-2 tb_k7if404 first">
									<div class="tb-column-inner tf_box tf_w">
				<!-- module text -->
<div class="module module-text tb_bl3i548">
        <div class="tb_text_wrap">
    <p>TransUnion</p>    </div>
</div>
<!-- /module text --><!-- module text -->
<div class="module module-text tb_eone004" id="cs-headline">
        <div class="tb_text_wrap">
    <p>Helping an information company  reflect its corporate evolution and  reignite passion in employees.</p>    </div>
</div>
<!-- /module text -->				</div><!-- .tb-column-inner -->
						</div><!-- .module_column -->
					<div class="module_column tb-column col3-1 tb_gt4l880 last">
							</div><!-- .module_column -->
						</div><!-- .row_inner -->
		</div><!-- .module_row -->
								<!-- module_row -->
		<div data-css_id="1o18044" class="module_row themify_builder_row fullwidth tb_1o18044 tf_w tf_clearfix wow" style="visibility: visible; animation-name: slideInUp;" data-fullwidth-done="1">
					<div class="row_inner col_align_top gutter-none tb_col_count_2 tf_box tf_rel">
					<div class="module_column tb-column col3-2 tb_awdw880 first">
									<div class="tb-column-inner tf_box tf_w">
				<!-- module text -->
<div class="module module-text tb_3y40888" id="cs-text1">
        <div class="tb_text_wrap">
    <div id="heroTextA" class="hero-text-block">
<p class="hero-paragraph">For more than 40 years, TransUnion was  thought of simply as a credit bureau.</p>
<p class="hero-paragraph">Recently, with ambitious new growth goals TransUnion made significant investments in its business, and evolved into a global risk and information solutions provider for a variety of businesses, many outside its financial services beginnings. It was also entering into new markets in other countries and adding significant new products that were helping to reshape how information could be used.</p>
<p class="hero-paragraph">TransUnion engaged Avenue to develop a new brand strategy that would be reflective of the evolving company. This included synthesizing inputs from around the company that articulated a unifying purpose statement, defining a compelling brand position, clarifying the value proposition.</p>
</div>
    </div>
</div>
<!-- /module text --><!-- module plain text -->
<div class="module module-plain-text tb_46c0994" id="hero-text">
        <div class="tb_text_wrap">
	    <div id="heroTextB" class="hero-text-block hidden">
<p class="hero-paragraph">This is more text for the SHOW MORE area of the text block.  Add more text here.  Because this is the place for more text.  We all really love more text, so put it here. Don’ hold back.</p>
<p class="hero-paragraph">This is more text for the SHOW MORE area of the text block.  Add more text here.  Because this is the place for more text.  We all really love more text, so put it here. Don’ hold back.</p>
    </div>

    <a href="javascript:void(0)" id="showMoreLink" class="hero-show-more-less">Show More</a>
    <a href="javascript:void(0)" id="showLessLink" class="hero-show-more-less hidden">Show Less</a>

    <script>
        const textBlock1 = document.getElementById('heroTextA');
        const textBlock2 = document.getElementById('heroTextB');
        const showMoreLink = document.getElementById('showMoreLink');
        const showLessLink = document.getElementById('showLessLink');

        showMoreLink.addEventListener('click', function(event) {
            event.preventDefault();
            //textBlock1.style.display = 'block';
            //textBlock2.style.height = 'auto';
			//textBlock2.style.opacity = "1"
			textBlock2.classList.remove('hidden')
            textBlock2.classList.add('revealed')
			///showMoreLink.style.display = 'none';
            ///showLessLink.style.display = 'inline';
			showLessLink.classList.remove('hidden')
			showMoreLink.classList.add('hidden')
        });

        showLessLink.addEventListener('click', function(event) {
            event.preventDefault();
            //textBlock1.style.display = 'none';
            //textBlock2.style.height = '0';
			//textBlock2.style.opacity = "0"
			textBlock2.classList.add('hidden')
			textBlock2.classList.remove('revealed')
			showLessLink.classList.add('hidden')
			showMoreLink.classList.remove('hidden')
            ///showMoreLink.style.display = 'inline';
            ///showLessLink.style.display = 'none';
        });
    </script>
    </div>
</div>
<!-- /module plain text -->				</div><!-- .tb-column-inner -->
						</div><!-- .module_column -->
					<div class="module_column tb-column col3-1 tb_4r20474 last">
									<div class="tb-column-inner tf_box tf_w">
				<!-- module text -->
<div class="module module-text tb_9r3y889 repeat" id="sidebar-cs">
        <div class="tb_text_wrap">
    <p class="engagement-head">Engagement highlights</p>
<ul class="engagement-list">
<li>Customer and employee research</li>
<li>Brand strategy and architecture</li>
<li>Brand identity development</li>
<li>Mission, vision and values definition</li>
<li>Value proposition and messaging strategy</li>
<li>Strategic planning facilitation</li>
<li>Internal/external go-to-market strategy</li>
<li>Brand and identity design</li>
<li>Internal/external go-to-market strategy</li>
<li>Brand standards and guidelines</li>
<li>Integrated marketing and communications materials (emails, events, messaging, video, collateral)</li>
<li>Sales tool development</li>
</ul>    </div>
</div>
<!-- /module text -->				</div><!-- .tb-column-inner -->
						</div><!-- .module_column -->
						</div><!-- .row_inner -->
		</div><!-- .module_row -->
								<!-- module_row -->
		<div class="module_row themify_builder_row tb_synr800 tf_w tf_clearfix wow" style="visibility: visible; animation-name: slideInUp;">
					<div class="row_inner col_align_top tb_col_count_1 tf_box tf_rel">
					<div class="module_column tb-column col-full tb_j2pt950 first">
									<div class="tb-column-inner tf_box tf_w">
				<!-- module plain text -->
<div class="module module-plain-text tb_cw4a455" id="big-quote">
        <div class="tb_text_wrap">
	<h2 class="big-quote-mark">“</h2>
<p class="big-quote-text">
Avenue understood the vision of where we are going and they did an outstanding job teasing out and refining a brand strategy that reflects that. They listened, pushed us past our comfort zone and brought it all to life.”	
</p>
<h6 class="big-quote-attribution">Julie Springer, EVP Marketing, TransUnion<br></h6>    </div>
</div>
<!-- /module plain text -->				</div><!-- .tb-column-inner -->
						</div><!-- .module_column -->
						</div><!-- .row_inner -->
		</div><!-- .module_row -->
								<!-- module_row -->
		<div class="module_row themify_builder_row tb_1mga050 tf_w tf_clearfix wow" style="visibility: visible; animation-name: slideInUp;">
					<div class="row_inner col_align_top tb_col_count_1 tf_box tf_rel">
					<div class="module_column tb-column col-full tb_vp1b944 first">
									<div class="tb-column-inner tf_box tf_w">
				<!-- module image -->
<div class="tf_lax_done tf_rel" data-lax-scale="(vh*1) 1,(vh*0) 1.1" data-box-position="center center" style="transform-origin: center center; transform: scale(1); z-index: auto;"><div class="module module-image tb_hvdh800 image-center tf_mw" data-lax-scale="(vh*1) 1,(vh*0) 1.1">
        <div class="image-wrap tf_rel tf_mw">
		    <img alt="transunion_act_3" title="transunion_act_3" class="tf_svg_lazy wp-post-image wp-image-1898 tf_svg_lazy_loaded" height="788" width="1400" decoding="async" sizes="(max-width: 1400px) 100vw, 1400px" srcset="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_3.jpg 1400w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_3-500x281.jpg 500w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_3-1024x576.jpg 1024w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_3-768x432.jpg 768w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_3-1024x576-800x450.jpg 800w" src="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_3.jpg"><noscript><img data-tf-not-load src="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_3.jpg" class="wp-post-image wp-image-1898" title="transunion_act_3" alt="transunion_act_3" srcset="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_3.jpg 1400w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_3-500x281.jpg 500w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_3-1024x576.jpg 1024w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_3-768x432.jpg 768w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_3-1024x576-800x450.jpg 800w" sizes="(max-width: 1400px) 100vw, 1400px" /></noscript>	
		</div>
	<!-- /image-wrap -->
    
    	</div></div>
<!-- /module image -->				</div><!-- .tb-column-inner -->
						</div><!-- .module_column -->
						</div><!-- .row_inner -->
		</div><!-- .module_row -->
								<!-- module_row -->
		<div class="module_row themify_builder_row tb_55sh915 tf_w tf_clearfix">
					<div class="row_inner col_align_top tb_col_count_1 tf_box tf_rel">
					<div class="module_column tb-column col-full tb_uc96059 first">
									<div class="tb-column-inner tf_box tf_w">
				<!-- module plain text -->
<div class="module module-plain-text tb_ms9u019 stat-row" id="stat-row">
        <div class="tb_text_wrap">
	<div id="stat-row-number">
	
<span id="stat-number" style="color: rgb(0, 0, 0);">+65%</span>
</div>

<div id="stat-row-name">
	<span id="stat-name" style="color: rgb(0, 0, 0);">Stat Name Here
</span>
</div>
    </div>
</div>
<!-- /module plain text -->				</div><!-- .tb-column-inner -->
						</div><!-- .module_column -->
						</div><!-- .row_inner -->
		</div><!-- .module_row -->
								<!-- module_row -->
		<div class="module_row themify_builder_row tb_7j7i511 tf_w tf_clearfix">
					<div class="row_inner col_align_top tb_col_count_1 tf_box tf_rel">
					<div class="module_column tb-column col-full tb_legh511 first">
									<div class="tb-column-inner tf_box tf_w">
				<!-- module image -->
<div class="module module-image tb_zwd8511 full-width-image image-card-layout active-caption-hover tf_mw">
        <div class="image-wrap tf_rel tf_mw">
		    <img alt="Frame 2" title="Frame 2" class="wp-post-image wp-image-3058" height="810" width="1440" decoding="async" sizes="(max-width: 1440px) 100vw, 1440px" srcset="https://avenue23dev.wpengine.com/wp-content/uploads/Frame-2.png 1440w, https://avenue23dev.wpengine.com/wp-content/uploads/Frame-2-500x281.png 500w, https://avenue23dev.wpengine.com/wp-content/uploads/Frame-2-1024x576.png 1024w, https://avenue23dev.wpengine.com/wp-content/uploads/Frame-2-768x432.png 768w" src="https://avenue23dev.wpengine.com/wp-content/uploads/Frame-2.png"><noscript><img data-tf-not-load src="https://avenue23dev.wpengine.com/wp-content/uploads/Frame-2.png" class="wp-post-image wp-image-3058" title="Frame 2" alt="Frame 2" srcset="https://avenue23dev.wpengine.com/wp-content/uploads/Frame-2.png 1440w, https://avenue23dev.wpengine.com/wp-content/uploads/Frame-2-500x281.png 500w, https://avenue23dev.wpengine.com/wp-content/uploads/Frame-2-1024x576.png 1024w, https://avenue23dev.wpengine.com/wp-content/uploads/Frame-2-768x432.png 768w" sizes="(max-width: 1440px) 100vw, 1440px" /></noscript>	
		</div>
	<!-- /image-wrap -->
    
    	</div>
<!-- /module image -->				</div><!-- .tb-column-inner -->
						</div><!-- .module_column -->
						</div><!-- .row_inner -->
		</div><!-- .module_row -->
								<!-- module_row -->
		<div class="module_row themify_builder_row tb_997y955 tf_w tf_clearfix wow" style="visibility: visible; animation-name: slideInUp;">
					<div class="row_inner col_align_top tb_col_count_1 tf_box tf_rel">
					<div class="module_column tb-column col-full tb_747z983 first">
									<div class="tb-column-inner tf_box tf_w">
				<!-- module image -->
<div class="module module-image tb_ml5m998 image-center tf_mw wow" style="visibility: visible; animation-name: fadeIn;">
        <div class="image-wrap tf_rel tf_mw">
		    <img alt="transunion_act_11" title="transunion_act_11" class="wp-post-image wp-image-1905" height="788" width="1400" decoding="async" sizes="(max-width: 1400px) 100vw, 1400px" srcset="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_11.jpg 1400w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_11-500x281.jpg 500w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_11-1024x576.jpg 1024w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_11-768x432.jpg 768w" src="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_11.jpg"><noscript><img data-tf-not-load src="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_11.jpg" class="wp-post-image wp-image-1905" title="transunion_act_11" alt="transunion_act_11" srcset="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_11.jpg 1400w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_11-500x281.jpg 500w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_11-1024x576.jpg 1024w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_11-768x432.jpg 768w" sizes="(max-width: 1400px) 100vw, 1400px" /></noscript>	
		</div>
	<!-- /image-wrap -->
    
    	</div>
<!-- /module image -->				</div><!-- .tb-column-inner -->
						</div><!-- .module_column -->
						</div><!-- .row_inner -->
		</div><!-- .module_row -->
								<!-- module_row -->
		<div data-css_id="fy34008" class="module_row themify_builder_row nine-tile-pics fullwidth tb_fy34008 tf_w tf_clearfix wow" data-fullwidth-done="1" style="visibility: visible; animation-name: fadeIn;">
					<div class="row_inner col_align_top gutter-none tb_col_count_3 tf_box tf_rel">
					<div class="module_column tb-column col3-1 tb_93k5309 first">
									<div class="tb-column-inner tf_box tf_w">
				<!-- module image -->
<div class="module module-image tb_jfe3388 image-top auto_fullwidth tf_mw wow" style="visibility: visible; animation-name: fadeInLeft;">
        <div class="image-wrap tf_rel tf_mw">
		    <img alt="transunion_act_6" title="transunion_act_6" class="wp-post-image wp-image-3060" height="270" width="480" decoding="async" src="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_6-480x270.png"><noscript><img data-tf-not-load src="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_6-480x270.png" width="480" height="270" class="wp-post-image wp-image-3060" title="transunion_act_6" alt="transunion_act_6"></noscript>	
		</div>
	<!-- /image-wrap -->
    
    	</div>
<!-- /module image --><!-- module image -->
<div class="module module-image tb_vx7q404 image-top auto_fullwidth tf_mw wow" style="visibility: visible; animation-name: fadeInLeftBig;">
        <div class="image-wrap tf_rel tf_mw">
		    <img alt="transunion_act_6-4" title="transunion_act_6-4" class="wp-post-image wp-image-3066" height="270" width="480" decoding="async" src="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_6-4-480x270.png"><noscript><img data-tf-not-load src="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_6-4-480x270.png" width="480" height="270" class="wp-post-image wp-image-3066" title="transunion_act_6-4" alt="transunion_act_6-4"></noscript>	
		</div>
	<!-- /image-wrap -->
    
    	</div>
<!-- /module image --><!-- module image -->
<div class="module module-image tb_0bbh509 image-top tf_mw wow" style="visibility: visible; animation-name: fadeInLeft;">
        <div class="image-wrap tf_rel tf_mw">
		    <img alt="transunion_act_6-7" title="transunion_act_6-7" class="wp-post-image wp-image-3063" height="270" width="480" decoding="async" sizes="(max-width: 480px) 100vw, 480px" srcset="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_6-7.png 480w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_6-7-506x284.png 506w" src="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_6-7-480x270.png"><noscript><img data-tf-not-load src="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_6-7-480x270.png" width="480" height="270" class="wp-post-image wp-image-3063" title="transunion_act_6-7" alt="transunion_act_6-7" srcset="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_6-7.png 480w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_6-7-506x284.png 506w" sizes="(max-width: 480px) 100vw, 480px" /></noscript>	
		</div>
	<!-- /image-wrap -->
    
    	</div>
<!-- /module image -->				</div><!-- .tb-column-inner -->
						</div><!-- .module_column -->
					<div class="module_column tb-column col3-1 tb_vv9b450">
									<div class="tb-column-inner tf_box tf_w">
				<!-- module image -->
<div class="module module-image tb_cg2o040 image-top auto_fullwidth tf_mw wow" style="visibility: visible; animation-name: fadeInUpBig;">
        <div class="image-wrap tf_rel tf_mw">
		    <img alt="transunion_act_6-1" title="transunion_act_6-1" class="wp-post-image wp-image-3069" height="270" width="480" decoding="async" src="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_6-1-480x270.png"><noscript><img data-tf-not-load src="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_6-1-480x270.png" width="480" height="270" class="wp-post-image wp-image-3069" title="transunion_act_6-1" alt="transunion_act_6-1"></noscript>	
		</div>
	<!-- /image-wrap -->
    
    	</div>
<!-- /module image --><!-- module image -->
<div class="module module-image tb_uutn470 image-top auto_fullwidth tf_mw wow" style="visibility: visible; animation-name: fadeIn;">
        <div class="image-wrap tf_rel tf_mw">
		    <img alt="transunion_act_6-5" title="transunion_act_6-5" class="wp-post-image wp-image-3065" height="270" width="480" decoding="async" src="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_6-5-480x270.png"><noscript><img data-tf-not-load src="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_6-5-480x270.png" width="480" height="270" class="wp-post-image wp-image-3065" title="transunion_act_6-5" alt="transunion_act_6-5"></noscript>	
		</div>
	<!-- /image-wrap -->
    
    	</div>
<!-- /module image --><!-- module image -->
<div class="module module-image tb_eb0i050 image-top auto_fullwidth tf_mw wow" style="visibility: visible; animation-name: fadeInUp;">
        <div class="image-wrap tf_rel tf_mw">
		    <img alt="transunion_act_6-8" title="transunion_act_6-8" class="wp-post-image wp-image-3062" height="270" width="480" decoding="async" src="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_6-8-480x270.png"><noscript><img data-tf-not-load src="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_6-8-480x270.png" width="480" height="270" class="wp-post-image wp-image-3062" title="transunion_act_6-8" alt="transunion_act_6-8"></noscript>	
		</div>
	<!-- /image-wrap -->
    
    	</div>
<!-- /module image -->				</div><!-- .tb-column-inner -->
						</div><!-- .module_column -->
					<div class="module_column tb-column col3-1 tb_m7pt500 last">
									<div class="tb-column-inner tf_box tf_w">
				<!-- module image -->
<div class="module module-image tb_28ti858 image-top tf_mw wow" style="visibility: visible; animation-name: fadeInRight;">
        <div class="image-wrap tf_rel tf_mw">
		    <img alt="Frame 3" title="Frame 3" class="wp-post-image wp-image-3070" height="270" width="480" decoding="async" src="https://avenue23dev.wpengine.com/wp-content/uploads/Frame-3-480x270.png"><noscript><img data-tf-not-load src="https://avenue23dev.wpengine.com/wp-content/uploads/Frame-3-480x270.png" width="480" height="270" class="wp-post-image wp-image-3070" title="Frame 3" alt="Frame 3"></noscript>	
		</div>
	<!-- /image-wrap -->
    
    	</div>
<!-- /module image --><!-- module image -->
<div class="module module-image tb_ewqa430 image-top tf_mw wow" style="visibility: visible; animation-name: fadeInRightBig;">
        <div class="image-wrap tf_rel tf_mw">
		    <img alt="transunion_act_6-6" title="transunion_act_6-6" class="wp-post-image wp-image-3064" height="270" width="480" decoding="async" src="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_6-6-480x270.png"><noscript><img data-tf-not-load src="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_6-6-480x270.png" width="480" height="270" class="wp-post-image wp-image-3064" title="transunion_act_6-6" alt="transunion_act_6-6"></noscript>	
		</div>
	<!-- /image-wrap -->
    
    	</div>
<!-- /module image --><!-- module image -->
<div class="module module-image tb_3pvh009 image-top tf_mw wow" style="visibility: visible; animation-name: fadeInRight;">
        <div class="image-wrap tf_rel tf_mw">
		    <img alt="transunion_act_6-9" title="transunion_act_6-9" class="wp-post-image wp-image-3061" height="270" width="480" decoding="async" src="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_6-9-480x270.png"><noscript><img data-tf-not-load src="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_6-9-480x270.png" width="480" height="270" class="wp-post-image wp-image-3061" title="transunion_act_6-9" alt="transunion_act_6-9"></noscript>	
		</div>
	<!-- /image-wrap -->
    
    	</div>
<!-- /module image -->				</div><!-- .tb-column-inner -->
						</div><!-- .module_column -->
						</div><!-- .row_inner -->
		</div><!-- .module_row -->
								<!-- module_row -->
		<div class="module_row themify_builder_row tb_btb4080 tf_w tf_clearfix wow" style="visibility: visible; animation-name: pulse;">
					<div class="row_inner col_align_top tb_col_count_1 tf_box tf_rel">
					<div class="module_column tb-column col-full tb_76x3955 first">
									<div class="tb-column-inner tf_box tf_w">
				<!-- module image -->
<div class="module module-image tb_18be960 image-center tf_mw">
        <div class="image-wrap tf_rel tf_mw">
		    <img alt="transunion_act_17" title="transunion_act_17" class="wp-post-image wp-image-1909" height="788" width="1400" decoding="async" sizes="(max-width: 1400px) 100vw, 1400px" srcset="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_17.jpg 1400w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_17-500x281.jpg 500w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_17-1024x576.jpg 1024w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_17-768x432.jpg 768w" src="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_17.jpg"><noscript><img data-tf-not-load src="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_17.jpg" class="wp-post-image wp-image-1909" title="transunion_act_17" alt="transunion_act_17" srcset="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_17.jpg 1400w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_17-500x281.jpg 500w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_17-1024x576.jpg 1024w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_17-768x432.jpg 768w" sizes="(max-width: 1400px) 100vw, 1400px" /></noscript>	
		</div>
	<!-- /image-wrap -->
    
    	</div>
<!-- /module image -->				</div><!-- .tb-column-inner -->
						</div><!-- .module_column -->
						</div><!-- .row_inner -->
		</div><!-- .module_row -->
								<!-- module_row -->
		<div class="module_row themify_builder_row tb_7ph1409 tf_w tf_clearfix wow" style="visibility: visible; animation-name: pulse;">
					<div class="row_inner col_align_top tb_col_count_1 tf_box tf_rel">
					<div class="module_column tb-column col-full tb_0e4f409 first">
									<div class="tb-column-inner tf_box tf_w">
				<!-- module image -->
<div class="module module-image tb_cigz409 image-center tf_mw">
        <div class="image-wrap tf_rel tf_mw">
		    <img alt="Frame 1" title="Frame 1" class="wp-post-image wp-image-3059" height="664" width="1180" decoding="async" sizes="(max-width: 1180px) 100vw, 1180px" srcset="https://avenue23dev.wpengine.com/wp-content/uploads/Frame-1.png 1180w, https://avenue23dev.wpengine.com/wp-content/uploads/Frame-1-500x281.png 500w, https://avenue23dev.wpengine.com/wp-content/uploads/Frame-1-1024x576.png 1024w, https://avenue23dev.wpengine.com/wp-content/uploads/Frame-1-768x432.png 768w" src="https://avenue23dev.wpengine.com/wp-content/uploads/Frame-1.png"><noscript><img data-tf-not-load src="https://avenue23dev.wpengine.com/wp-content/uploads/Frame-1.png" class="wp-post-image wp-image-3059" title="Frame 1" alt="Frame 1" srcset="https://avenue23dev.wpengine.com/wp-content/uploads/Frame-1.png 1180w, https://avenue23dev.wpengine.com/wp-content/uploads/Frame-1-500x281.png 500w, https://avenue23dev.wpengine.com/wp-content/uploads/Frame-1-1024x576.png 1024w, https://avenue23dev.wpengine.com/wp-content/uploads/Frame-1-768x432.png 768w" sizes="(max-width: 1180px) 100vw, 1180px" /></noscript>	
		</div>
	<!-- /image-wrap -->
    
    	</div>
<!-- /module image -->				</div><!-- .tb-column-inner -->
						</div><!-- .module_column -->
						</div><!-- .row_inner -->
		</div><!-- .module_row -->
								<!-- module_row -->
		<div class="module_row themify_builder_row tb_h79z251 tf_w tf_clearfix">
					<div class="row_inner col_align_top tb_col_count_1 tf_box tf_rel">
					<div class="module_column tb-column col-full tb_nxpp251 first">
									<div class="tb-column-inner tf_box tf_w">
				<!-- module plain text -->
<div class="module module-plain-text tb_ybit728 big-quote">
        <div class="tb_text_wrap">
	<h2 class="big-quote-mark">“</h2>
<p class="big-quote-text">
Second quote would go here. They listened, pushed us past our comfort zone and brought  it all to life. The resulting brand platform will help the world, and ourselves, see and think about TU in a new way, and help position  us for further growth.”	
</p>
<h6 class="big-quote-attribution">
	Julie Springer, EVP Marketing, TransUnion
</h6>    </div>
</div>
<!-- /module plain text -->				</div><!-- .tb-column-inner -->
						</div><!-- .module_column -->
						</div><!-- .row_inner -->
		</div><!-- .module_row -->
								<!-- module_row -->
		<div data-css_id="94ur590" class="module_row themify_builder_row fullwidth tb_94ur590 tf_w tf_clearfix wow" data-fullwidth-done="1" style="visibility: visible; animation-name: slideInUp;">
					<div class="row_inner col_align_top gutter-none tb_col_count_2 tf_box tf_rel">
					<div class="module_column tb-column col4-2 tb_y8p3055 first">
									<div class="tb-column-inner tf_box tf_w">
				<!-- module image -->
<div class="module module-image tb_p8sc594 image-top auto_fullwidth tf_mw">
        <div class="image-wrap tf_rel tf_mw">
		    <img alt="transunion_act_9" title="transunion_act_9" class="wp-post-image wp-image-3081" height="405" width="720" decoding="async" sizes="(max-width: 720px) 100vw, 720px" srcset="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_9.png 720w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_9-500x281.png 500w" src="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_9.png"><noscript><img data-tf-not-load src="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_9.png" class="wp-post-image wp-image-3081" title="transunion_act_9" alt="transunion_act_9" srcset="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_9.png 720w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_9-500x281.png 500w" sizes="(max-width: 720px) 100vw, 720px" /></noscript>	
		</div>
	<!-- /image-wrap -->
    
    	</div>
<!-- /module image --><!-- module image -->
<div class="module module-image tb_14b3959 image-top auto_fullwidth tf_mw">
        <div class="image-wrap tf_rel tf_mw">
		    <img alt="transunion_act_9-3" title="transunion_act_9-3" class="wp-post-image wp-image-3078" height="405" width="720" decoding="async" sizes="(max-width: 720px) 100vw, 720px" srcset="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_9-3.png 720w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_9-3-500x281.png 500w" src="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_9-3.png"><noscript><img data-tf-not-load src="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_9-3.png" class="wp-post-image wp-image-3078" title="transunion_act_9-3" alt="transunion_act_9-3" srcset="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_9-3.png 720w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_9-3-500x281.png 500w" sizes="(max-width: 720px) 100vw, 720px" /></noscript>	
		</div>
	<!-- /image-wrap -->
    
    	</div>
<!-- /module image -->				</div><!-- .tb-column-inner -->
						</div><!-- .module_column -->
					<div class="module_column tb-column col4-2 tb_kw7s899 last">
									<div class="tb-column-inner tf_box tf_w">
				<!-- module image -->
<div class="module module-image tb_2unq890 image-top auto_fullwidth tf_mw">
        <div class="image-wrap tf_rel tf_mw">
		    <img alt="transunion_act_9-2" title="transunion_act_9-2" class="wp-post-image wp-image-3079" height="405" width="720" decoding="async" sizes="(max-width: 720px) 100vw, 720px" srcset="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_9-2.png 720w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_9-2-500x281.png 500w" src="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_9-2.png"><noscript><img data-tf-not-load src="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_9-2.png" class="wp-post-image wp-image-3079" title="transunion_act_9-2" alt="transunion_act_9-2" srcset="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_9-2.png 720w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_9-2-500x281.png 500w" sizes="(max-width: 720px) 100vw, 720px" /></noscript>	
		</div>
	<!-- /image-wrap -->
    
    	</div>
<!-- /module image --><!-- module image -->
<div class="module module-image tb_t4fr878 image-top auto_fullwidth tf_mw">
        <div class="image-wrap tf_rel tf_mw">
		    <img alt="transunion_act_9-1" title="transunion_act_9-1" class="wp-post-image wp-image-3080" height="405" width="720" decoding="async" sizes="(max-width: 720px) 100vw, 720px" srcset="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_9-1.png 720w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_9-1-500x281.png 500w" src="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_9-1.png"><noscript><img data-tf-not-load src="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_9-1.png" class="wp-post-image wp-image-3080" title="transunion_act_9-1" alt="transunion_act_9-1" srcset="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_9-1.png 720w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_9-1-500x281.png 500w" sizes="(max-width: 720px) 100vw, 720px" /></noscript>	
		</div>
	<!-- /image-wrap -->
    
    	</div>
<!-- /module image -->				</div><!-- .tb-column-inner -->
						</div><!-- .module_column -->
						</div><!-- .row_inner -->
		</div><!-- .module_row -->
								<!-- module_row -->
		<div class="module_row themify_builder_row tb_wdwh658 tf_w tf_clearfix wow" style="visibility: visible; animation-name: slideInUp;">
					<div class="row_inner col_align_top tb_col_count_1 tf_box tf_rel">
					<div class="module_column tb-column col-full tb_nxkl658 first">
									<div class="tb-column-inner tf_box tf_w">
				<!-- module image -->
<div class="tf_lax_done tf_rel" data-lax-scale="(vh*1) 1,(vh*0) 1.1" data-box-position="center center" style="transform-origin: center center; transform: scale(1); z-index: auto;"><div class="module module-image tb_hhni658 image-center tf_mw" data-lax-scale="(vh*1) 1,(vh*0) 1.1">
        <div class="image-wrap tf_rel tf_mw">
		    <img alt="transunion_act_14" title="transunion_act_14" class="wp-post-image wp-image-1908" height="788" width="1400" decoding="async" sizes="(max-width: 1400px) 100vw, 1400px" srcset="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_14.jpg 1400w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_14-500x281.jpg 500w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_14-1024x576.jpg 1024w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_14-768x432.jpg 768w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_14-1024x576-800x450.jpg 800w" src="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_14.jpg"><noscript><img data-tf-not-load src="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_14.jpg" class="wp-post-image wp-image-1908" title="transunion_act_14" alt="transunion_act_14" srcset="https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_14.jpg 1400w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_14-500x281.jpg 500w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_14-1024x576.jpg 1024w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_14-768x432.jpg 768w, https://avenue23dev.wpengine.com/wp-content/uploads/transunion_act_14-1024x576-800x450.jpg 800w" sizes="(max-width: 1400px) 100vw, 1400px" /></noscript>	
		</div>
	<!-- /image-wrap -->
    
    	</div></div>
<!-- /module image -->				</div><!-- .tb-column-inner -->
						</div><!-- .module_column -->
						</div><!-- .row_inner -->
		</div><!-- .module_row -->
				</div>
<!--/themify_builder_content-->
	    
	</div><!-- /.entry-content -->
	    	</div>
	            </article>

	
    
    
		<div class="post-nav tf_box tf_clearfix">
			<span class="prev tf_box"><a href="https://avenue23dev.wpengine.com/our-work/transunion2/" rel="prev"><span class="prevAveArrow aveArrow"><img src="https://avenue23dev.wpengine.com/wp-content/uploads/Arrow-22-e1699904819176.png" alt=""></span> TransUnion</a></span>		</div>
		<!-- /.post-nav -->

	</main>
<!-- /content -->
    </div>    
    <!-- hook content: themify_layout_after --><style id="themify-builder-2627-generated-cffonts">@font-face{
	font-family:'graphik';
	font-style:normal;
	font-weight:700;
	font-display:swap;
	src:url('/wp-content/uploads/Graphik-Bold-Web.woff') format('woff')
}
@font-face{
	font-family:'graphik';
	font-style:normal;
	font-weight:normal;
	font-display:swap;
	src:url('/wp-content/uploads/Graphik-Regular-Web.woff') format('woff')
}
</style>
<div class="tb_layout_part_wrap tf_w">
<!--themify_builder_content-->
    <div class="themify_builder_content themify_builder_content-2627 themify_builder not_editable_builder" data-postid="2627">
        				<!-- module_row -->
		<div id="ready-for-growth" class="module_row themify_builder_row tb_k92z790 tf_w tf_clearfix">
					<div class="row_inner col_align_top tb_col_count_1 tf_box tf_rel">
					<div class="module_column tb-column col-full tb_n14v791 first">
									<div class="tb-column-inner tf_box tf_w">
				<!-- module fancy heading -->
<div class="module module-fancy-heading tb_ruap142 rg-heading tb_hide_divider" id="rgHead">
	    <h2 class="fancy-heading tf_textc">
    <span class="main-head tf_block">
					Ready for Change &amp; Growth?		    </span>

	
    <span class="sub-head tf_block tf_rel">
							    </span>
    </h2>
</div>
<!-- /module fancy heading -->
		<div class="module_subrow themify_builder_sub_row tb_esme925 tf_w tf_clearfix">
					<div class="subrow_inner col_align_top tb_col_count_2 tf_box tf_w">
					<div class="module_column sub_column col4-2 tb_zhlv926 first">
									<div class="tb-column-inner tf_box tf_w">
				<!-- module buttons -->
<div class="module module-buttons tb_ho5o336 buttons-horizontal outline rg-button-left xlarge rounded buttons-fullwidth tb_gs178604">
		<div class="module-buttons-item tf_inline_b">
						<a href="https://avenue23dev.wpengine.com/work/" class="ui builder_button purple">
								<span class="tf_inline_b tf_vmiddle">LET'S CONNECT            </span>
												</a>
						</div>
			</div>
<!-- /module buttons -->
				</div><!-- .tb-column-inner -->
						</div><!-- .module_column -->
					<div class="module_column sub_column col4-2 tb_3bkr926 last">
									<div class="tb-column-inner tf_box tf_w">
				<!-- module buttons -->
<div class="module module-buttons tb_ahnv336 buttons-horizontal outline rg-button-right xlarge rounded buttons-fullwidth tb_gs178604">
		<div class="module-buttons-item tf_inline_b">
						<a href="https://avenue23dev.wpengine.com/services/" class="ui builder_button tb_default_color">
								<span class="tf_inline_b tf_vmiddle">B2B INSIGHTS SIGNUP</span>
												</a>
						</div>
			</div>
<!-- /module buttons -->
				</div><!-- .tb-column-inner -->
						</div><!-- .module_column -->
						</div><!-- .subrow_inner -->
		</div><!-- .themify_builder_sub_row -->
								</div><!-- .tb-column-inner -->
						</div><!-- .module_column -->
						</div><!-- .row_inner -->
		</div><!-- .module_row -->
				    </div>
<!--/themify_builder_content-->
</div>

<!-- /hook content: themify_layout_after --></div><!-- /body -->
<div id="footerwrap" class="tf_box tf_clear">
				<footer id="footer" class="tf_box pagewidth tf_scrollbar tf_rel tf_clearfix" itemscope="itemscope" itemtype="https://schema.org/WPFooter">
			
			<div class="main-col first tf_clearfix">
				<div class="footer-left-wrap first">
					
									</div>

				<div class="footer-right-wrap">
																	<div class="footer-nav-wrap">
													</div>
						<!-- /.footer-nav-wrap -->
					
									</div>
			</div>

												<div class="section-col tf_clearfix">
						<div class="footer-widgets-wrap">
							
		<div class="footer-widgets tf_clearfix">
							<div class="col4-2 first tf_box tf_float">
					<div id="media_image-2" class="widget widget_media_image"><img style="max-width: 100%; height: auto;" decoding="async" alt="" class="image wp-image-269 attachment-full size-full" height="178" width="344" src="https://avenue23dev.wpengine.com/wp-content/uploads/change-and-growth-forB2B.png"><noscript><img width="344" height="178" data-tf-not-load src="https://avenue23dev.wpengine.com/wp-content/uploads/change-and-growth-forB2B.png" class="image wp-image-269  attachment-full size-full" alt="" decoding="async" style="max-width: 100%; height: auto;" /></noscript></div>				</div>
							<div class="col4-2 tf_box tf_float">
					<div id="media_image-3" class="widget widget_media_image"><a href="/"><img style="max-width: 100%; height: auto;" decoding="async" alt="" class="image wp-image-2472 attachment-full size-full" height="29" width="139" src="https://avenue23dev.wpengine.com/wp-content/uploads/avenue_inc_logo_white.png"><noscript><img width="139" height="29" data-tf-not-load src="https://avenue23dev.wpengine.com/wp-content/uploads/avenue_inc_logo_white.png" class="image wp-image-2472  attachment-full size-full" alt="" decoding="async" style="max-width: 100%; height: auto;" /></noscript></a></div><div id="text-2" class="widget widget_text">			<div class="textwidget"><div class="footer-text">
info@avenue-inc.com<br>
(312) 787-8300<br>
Chicago, Illinois<p></p>
<p><a href="/careers/">Jobs at Avenue</a><br>
<a href="/private-equity/">Private Equity</a>
</p></div>
</div>
		</div>				</div>
					</div>
		<!-- /.footer-widgets -->

								<!-- /footer-widgets -->
						</div>
					</div>
					<div class="footer-text tf_clear tf_clearfix">
						<div class="footer-text-inner">
							<div class="two"><p id="footer-copyright">2023 by Avenue. All rights reserved.  <a href="">Terms of Use </a> | <a class="">Privacy Policy</a> </p></div>						</div>
					</div>
					<!-- /.footer-text -->
							
					</footer><!-- /#footer -->
				
	</div><!-- /#footerwrap -->
</div><!-- /#pagewrap -->
<!-- hook content: themify_body_end --><script>
/// Get the previous arrow <span> and remove the arrow class (this removes all the css creating the OLD arrow) and add new
/// classes for styling in the style.css file
 
    const prevArrow = document.querySelector('.prev .arrow');
    prevArrow.classList.remove('arrow')
    prevArrow.classList.add('prevAveArrow', 'aveArrow')
    
/// Create an new element with the arrow LEFT url and append it to the span
    const prevArrowImage = document.createElement('img')
    prevArrowImage.src = 'https://avenue23dev.wpengine.com/wp-content/uploads/Arrow-22-e1699904819176.png'
    prevArrowImage.alt = ""
    prevArrow.appendChild(prevArrowImage);

/// Get the next arrow Span and REMOVE IT ENTIRELY, create a new span, give it the proper classes
    const nextArrow = document.querySelector('.next .arrow');
    nextArrow.remove()
    const newNextArrowSpan = document.createElement('span')
    newNextArrowSpan.classList.add('nextAveArrow', 'aveArrow')
    
/// Create nextArrow img element and give it is src and alt, append it to the new span, append the new span with the img to 
/// the <a> tag.  we are removing and recreating the span because since the previous arrow was created with a css:before 
/// element, it was able to appear after the text within the <a> tag.  now it will appears AFTER the text in the <a> tag.  this 
///probably could have been done with flex reverse or something, but i prefer the DOM to be in order. 

    const nextArrowImage = document.createElement('img')
    nextArrowImage.src = 'https://avenue23dev.wpengine.com/wp-content/uploads/Arrow-22-1.png'
    nextArrowImage.alt = ""
    newNextArrowSpan.appendChild(nextArrowImage);
    const nextLink = document.querySelector('.next a');
    nextLink.appendChild(newNextArrowSpan)
 </script><!-- /hook content: themify_body_end --><!-- wp_footer -->
                <!--googleoff:all-->
                <!--noindex-->
                <!--noptimize-->
                <script id="tf_vars" data-no-optimize="1" data-noptimize="1" defer="defer" src="data:text/javascript;base64,dmFyIHRoZW1pZnlTY3JpcHQgPSB7ImhlYWRlclR5cGUiOiJoZWFkZXItaG9yaXpvbnRhbCIsInN0aWNreV9oZWFkZXIiOnsiaW1nd2lkdGgiOiIiLCJpbWdoZWlnaHQiOiIiLCJpZCI6MjQ3Miwic3JjIjoiaHR0cHM6XC9cL2F2ZW51ZTIzZGV2LndwZW5naW5lLmNvbVwvd3AtY29udGVudFwvdXBsb2Fkc1wvYXZlbnVlX2luY19sb2dvX3doaXRlLnBuZyJ9LCJwYWdlTG9hZGVyRWZmZWN0IjoiIiwiaW5maW5pdGVFbmFibGUiOiIwIn07CnZhciB0YkxvY2FsU2NyaXB0ID0geyJicmVha3BvaW50cyI6eyJ0YWJsZXRfbGFuZHNjYXBlIjpbNzY5LDEwMjRdLCJ0YWJsZXQiOls2MDEsNzY4XSwibW9iaWxlIjo2MDB9LCJmdWxsd2lkdGhfc3VwcG9ydCI6IjEiLCJzY3JvbGxIaWdobGlnaHQiOnsic3BlZWQiOjkwMC4wMX0sImFkZG9ucyI6W119Owp2YXIgdGhlbWlmeV92YXJzID0geyJtZW51X3BvaW50IjoiOTAwIiwid3AiOiI2LjMuMiIsImFqYXhfdXJsIjoiaHR0cHM6Ly9hdmVudWUyM2Rldi53cGVuZ2luZS5jb20vd3AtYWRtaW4vYWRtaW4tYWpheC5waHAiLCJtZW51X3Rvb2x0aXBzIjpbXSwicGx1Z2luX3VybCI6Imh0dHBzOi8vYXZlbnVlMjNkZXYud3BlbmdpbmUuY29tL3dwLWNvbnRlbnQvcGx1Z2lucyIsInRoZW1lX3YiOiI3LjMuNSIsImVtYWlsU3ViIjoiQ2hlY2sgdGhpcyBvdXQhIiwibm9wIjoiQ2hlY2sgdGhpcyBvdXQhIiwibGlnaHRib3giOnsiaTE4biI6eyJ0Q291bnRlciI6IiVjdXJyJSBvZiAldG90YWwlIn19LCJzX3YiOiI1LjMuOSIsImRvbmUiOnsidGJfdGV4dCI6dHJ1ZSwidGJfaW1hZ2UiOnRydWUsInRiX2ltYWdlX2NlbnRlciI6dHJ1ZSwidGJfaW1hZ2VfY2FyZC1sYXlvdXQiOnRydWUsInRiX2ltYWdlX3RvcCI6dHJ1ZSwidGJfc3R5bGUiOnRydWUsInRiX2ZhbmN5LWhlYWRpbmciOnRydWUsInRiX2J1dHRvbnMiOnRydWUsInRiX2J1dHRvbnNfb3V0bGluZSI6dHJ1ZSwidGJfYXBwIjp0cnVlLCJ0Yl9idXR0b25zX2Z1bGx3aWR0aCI6dHJ1ZSwidGJfY29sb3IiOnRydWUsInRmX3RoZW1lX3dpZGdldF90ZXh0Ijp0cnVlfX07"></script>
                <!--/noptimize-->
                <!--/noindex-->
                <!--googleon:all-->
                <script defer="defer" data-v="7.3.2" data-pl-href="https://avenue23dev.wpengine.com/wp-content/plugins/fake.css" data-no-optimize="1" data-noptimize="1" src="https://avenue23dev.wpengine.com/wp-content/themes/themify-ultra/themify/js/main.js?ver=7.3.2" id="themify-main-script-js"></script>


<script>
	//Make this entire div class clickable
$=jQuery
$(document).ready(function() {
    $('.clickbox').click(function() {
        var href = $(this).find("a").attr("href");
        if(href) {
            window.location = href;
        }
    });
});
</script>
<script>
	//Make this entire div class clickable
$=jQuery
$(document).ready(function() {
    $('.post-content').click(function() {
        var href = $(this).find("a").attr("href");
        if(href) {
            window.location = href;
        }
    });
});
</script>

<script>
	 //Fixed header only visible when scrolling back up
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("headerwrap").style.top = "0";
  } else {
    document.getElementById("headerwrap").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}
</script><!-- SCHEMA BEGIN --><script type="application/ld+json">[{"@context":"https:\/\/schema.org","@type":"CreativeWork","mainEntityOfPage":{"@type":"WebPage","@id":"https:\/\/avenue23dev.wpengine.com\/our-work\/transunion_2-2-3\/"},"headline":"TransUnion Case Study","datePublished":"2023-11-16T22:32:50-05:00","dateModified":"2023-11-17T10:17:43-05:00","description":"Confidence Word <span class=\"blue\">\u2022<\/span> Inspiration Word <span class=\"blue\">\u2022<\/span> Intriguing Word <span class=\"blue\">\u2022<\/span> Word","image":{"@type":"ImageObject","url":"https:\/\/avenue23dev.wpengine.com\/wp-content\/uploads\/transunion-case-study-1024x477.jpg","width":1024,"height":477}}]</script><!-- /SCHEMA END -->	
<div class="body-overlay"></div></body></html>