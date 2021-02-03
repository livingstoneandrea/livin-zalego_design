(function($) {

    $(window).Scrollax();
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 100) {
            $("#back-top").fadeIn();
        } else {
            $("#back-top").fadeOut();
        }
    });
    $("#back-top").click(function(e) {
        e.preventDefault();
        $("html,body").animate({
                scrollTop: 0
            },
            "slow"
        );
        return false;
    });

    var nav_offset_top = $('header').height() + 50;
    //* Navbar Fixed
    function navbarFixed() {
        if ($('#app-header').length) {
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.bottom-section').addClass('fixednav');
                } else {
                    $('.bottom-section').removeClass('fixednav');
                }
            });
        }
    }
    navbarFixed();

    document.querySelector('#navbar-toggler').addEventListener('click', (e) => {
        e.preventDefault();
        $(this).toggleClass('-close');
        $('#mobile-nav').toggleClass('is-active');

    });
    $('#mobile-nav section nav.menu ul li').on('click', '#mobile-nav section nav.menu ul li a', (e) => {
        e.preventDefault();
        $('#mobile-nav section nav.menu ul li a').removeClass('is-active');
        $(this).children('a').addClass('is-active');

        var data_loc = $(this).children('a').attr('href');

        //window.location = data_loc;
        console.log(`wind loc ${data_loc}`);
        $('#mobile-nav').toggleClass('is-active');
    });

    $(window).on('load', function() {
        $('#main-nav ul li').on('click', function(e) {
            e.preventDefault();

            $('#main-nav ul li a').removeClass('is-active');
            $(this).children('a').addClass('is-active');

            var data = $(this).children('a').attr('href');
            console.log(`href ${data}`);
            window.location = data;

        });
        $('.portfolio-filter ul li ').on('click', function(e) {
            e.preventDefault();

            $('.portfolio-filter ul li').removeClass('is-active');
            $(this).addClass('is-active');

            var data = $(this).attr('data-filter');
            switch (data) {
                case 'desc':
                    $('.tab-item').removeClass('is-active');
                    $('.tab-item.desc').addClass('is-active');
                    break;

                default:
                    $('.tab-item').removeClass('is-active');
                    $('.tab-item.all').addClass('is-active');
                    break;
            }

        });


    });
    $('.single_portfolio').hover(function() {
        $(this).children('.overlay').css({
            "background": "#05364d",
            "top": "16px !important",
            "left": "16px !important"
        });
        $(this).children('.short_info').css({
            "opacity": ".6",
            "visibility": "visible"
        });

    }, function() {
        console.log('mouse left..');
        $(this).children('.overlay').css({
            "background": "none",
        });
        $(this).children('.short_info').css({
            "opacity": "0",
            "visibility": "hidden"
        });
    });

    var acc = document.getElementsByClassName("accordion");
    var acc_index;

    for (acc_index = 0; acc_index < acc.length; acc_index++) {
        acc[acc_index].addEventListener("click", function(e) {
            e.preventDefault();
            this.classList.toggle("active");

            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
    const btn = document.querySelectorAll('.short_info>h4>a')
    var modal = document.getElementById('toast-modal');
    btn.forEach(elem => {
        elem.addEventListener('click', (e) => {
            e.preventDefault();
            let data_extras = e.currentTarget.getAttribute('data-extras');
            console.log(`data extras ${e.currentTarget.getAttribute('data-extras')}`);
            switch (data_extras) {
                case 'sokoni':
                    $('.modal-content').css('width', '90%');
                    $('.modal-header h2').html(`Sokoni`);
                    var extra_info = `<div>\
                                        <p></p>\
                                        <button class="accordion2">Product Overview</button>\
                                        <div class="acc_panel">\
                                            <div class="--row">
                                                
                                            
                                            </div>
                                        </div>\
                                    </div>`;
                    var extra_info = `
                                       
                               <article class="grid-3">
                                    <img src="./static/img/shop1.jpg" alt="pronto-app"/>
                                </article>
                                <article class="grid-3">
                                    <img src="./static/img/shop2.jpg" alt="pronto-app"/>
                                </article>
                                <article class="grid-3">
                                    <img src="./static/img/shop3.jpg" alt="pronto-app"/>
                                </article>
                                <article class="grid-3">
                                    <img src="./static/img/shop4.jpg" alt="pronto-app"/>
                                </article>
                                `;
                    var text_desc = '';
                    $('#product_img').html(extra_info);
                    $('#product_desc').html(`
                    <p>Sokoni is an all under one roof platform with all the e-commerce features you need to start, run and grow your online business stress free. You can simply join, set-up, and start selling everywhere from wherever you are.</p>
                
                `);


                    break;
                case 'cli_ms':
                    $('.modal-content').css('width', '90%');
                    $('.modal-header h2').html(`Client Management System`);

                    var extra_info = `
                                       
                               <article class="grid-12">
                                    <img src="./static/img/gls.png" alt="pronto-app"/>
                                </article>
                                `;
                    var text_desc = '';
                    $('#product_img').html(extra_info);
                    $('#product_desc').html(`
                    <p>This is a system that is meant to prepare your business for the current and future wider diverse customer base.

                        Adoption of the platform will give you a better, different view and perception of your business operations, as you also give fresh and new experience to your existing and new customers. The platform will give you clear visibility, full control and management of the day to day running of your business. Overtime the platform is able to identify customers purchase behavior and therefore guide you on the kind of advertisements you need to push each and every customer.</p>\
                
                `);


                    break;

                case 'pettyCash_ms':
                    $('.modal-content').css('width', '90%');
                    $('.modal-header h2').html(`Petty Cash Management`);

                    var extra_info = `
                                       
                                <article class="grid-3">
                                    <img src="./static/img/c1.png" alt="pronto-app"/>
                                </article>
                                <article class="grid-3">
                                    <img src="./static/img/c2.png" alt="pronto-app"/>
                                </article>
                                <article class="grid-3">
                                    <img src="./static/img/c3.png" alt="pronto-app"/>
                                </article>
                                <article class="grid-3">
                                    <img src="./static/img/c4.png" alt="pronto-app"/>
                                </article>
                                `;
                    var text_desc = '';
                    $('#product_img').html(extra_info);
                    $('#product_desc').html(`
                    <p>This is an efficient and effective mobile based system that enables staff members to request for petty cash through their mobile devices while on the move. The system Saves Company’s time spend on petty cash requisitions and reconciliations at the same time brings in transparency onto expenditure made by staff members.</p>\
                
                `);


                    break;

                case 'sms_ms':
                    $('.modal-content').css('width', '90%');

                    $('.modal-header h2').html(`SMS Solutions`);
                    const data = `<p>Whether passing a message to customers or marketing to potential clients, our bulk messaging service can reach out to millions worldwide using our powerful and easy to use messaging platform that has limitless options. No programming skills are required and it accommodates any organization size whether a personal business or a large corporate. Some of its features include:-</p>`;
                    var extra_info = `<dl>\
                                        <dt>SMS (Short Messaging Service) </dt>\
                                        <dd>- This is a fast and simple to use channel for text messages that Doesn’t require internet connectivity.</dd>\
                                        <dt>Intelligent Routing</dt>\
                                        <dd>-Our powerful engine finds the shortest message for every message.</dd>\
                                        <dt>Numbers</dt>\
                                        <dd>- Local long number or Short Code available in more than 45 countries.</dd>\
                                        <dt>Long Messages in any Country </dt>\
                                        <dd>-One can send messages longer than 160 characters without additional setup and our platform will ensure it displays as you intended. Messages can be in any language.</dd>\
                                        <dt>2-Way Communication</dt>\
                                        <dd>-Receive reply messages from your customers and start a conversation.</dd>\
                                        <dt>Real Time intergration</dt>\
                                        <dd>- Integrate your system with us and send messages seamlessly from your system.</dd>\
                                        <dt>Personalization</dt>\
                                        <dd>- Personalize each message with as many elements as you need.</dd>\
                                        <dt>Voice</dt>\
                                        <dd>-Reach more customers worldwide with crystal – clear voice communications. Our platform supports both outbound and inbound voice calls over API, SIP integration or on our platform. One can combine voice with other channels like SMS, email or chat apps.</dd>\
                                        <dt>Intelligent Routing</dt>\
                                        <dd>-Our powerful engine finds the shortest message for every message.</dd>\
                                    </dl>`


                    $('.modal-body').html(data + extra_info);

                    break;

                case 'e-learn_sys':
                    $('.modal-content').css('width', '90%');
                    $('.modal-header h2').html(`Zalego E-Learning`);

                    var extra_info = `
                                   <div>
                                        <h2>Product Description</h2>
                                        lorem .....
                                     
                                    </div    
                                `;
                    var text_desc = '';
                    $('#product_img').html(extra_info);
                    $('#product_desc').html(`
                    <p>.An E-learning platform where we unmask your academic potential. And prepare job seekers for job industry by equipping them with the best skills ever.</p>\
                
                `);



                    break;

                case 'credit_scoring':
                    $('.modal-content').css('width', '90%');
                    $('.modal-header h2').html(`Pronto (Credit Scoring)`);

                    var extra_info = `
                                       
                                <article class="grid-3">
                                    <img src="./static/img/p1.png" alt="pronto-app"/>
                                 </article>
                                <article class="grid-3">
                                    <img src="./static/img/p2.png" alt="pronto-app"/>
                                </article>
                                <article class="grid-3">
                                    <img src="./static/img/p3.png" alt="pronto-app"/>
                                </article>
                                <article class="grid-3">
                                    <img src="./static/img/p4.png" alt="pronto-app"/>
                                </article>`;
                    var text_desc = '';
                    $('#product_img').html(extra_info);
                    $('#product_desc').html(`
                    <p>Zalego has developed a digital lending solution that harnesses the power of smartphone technology using Artificial to produce highly accurate credit scores. This is a product for financial institutions looking to reduce their default rates on loans issued through pre-screening loan applicants to evaluate their credit worthiness, ability to pay the loan and willingness to pay.</p>\
                
                `);


                    break;
                case 'rsc_locator':
                    $('.modal-content').css('width', '90%');
                    $('.modal-header h2').html(`Resource Locator`);
                    var extra_info = `
                                       
                                    <article class="grid-3">
                                        <img src="./static/img/resource1.png" alt="pronto-app"/>
                                    </article>
                                     <article class="grid-3">
                                        <img src="./static/img/resource2.png" alt="pronto-app"/>
                                    </article>
                                    <article class="grid-3">
                                        <img src="./static/img/resource3.png" alt="pronto-app"/>
                                    </article>
                                    <article class="grid-3">
                                        <img src="./static/img/resource4.png" alt="pronto-app"/>
                                    </article>`;
                    var text_desc = '';
                    $('#product_img').html(extra_info);
                    $('#product_desc').html(`
                    <p>Resource Locator is a new online tool that connects you with registered servicemen - cleaners, carpenters, plumbers, drivers and more. Book through the app and the service professional will just show up at your door.\
                       It is a mobile marketplace for local services. We help customers hire trusted professionals for all their service needs while offering skilled individuals a platform to offer their services at a professional level. This is a platform for workers and employers to network effortlessly. We are staffed with young, passionate people working tirelessly to make a difference in the lives of people by catering to their service needs at their doorsteps.</p>\
                
                `);

                    break;
                case 'h-man_rsc':
                    $('.modal-content').css('width', '90%');

                    $('.modal-header h2').html(`Human Resource management`);

                    var extra_info = `
                                       
                               <article class="grid-12">
                                    <img src="./static/img/hrms.png" alt="pronto-app"/>
                                </article>
                                `;
                    var text_desc = '';
                    $('#product_img').html(extra_info);
                    $('#product_desc').html(`
                    <p>This is an online web based system that enables human resource personnel to run their services with ease and efficiently..</p>\
                
                `);


                    break;


                default:
                    $('.modal-content').css('width', '60%');
                    $('.modal-body').html(`<p>We have no extra info of yet the content will be updated soon</p>\

                    <p>Working on it <i class="fas fa-smile-wink fa-2x" style="color:#fc8f00"></i> &nbsp;...</p>`);
                    break;
            }

            modal.style.display = "block";
        });


    });


    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
        //clear modal data
        // $('.modal-body').html(' ');
        window.location.reload(true);


    }

    document.querySelector('#mob-navClose').addEventListener('click', (e) => {
        e.preventDefault();
        $('#mobile-nav').toggleClass('is-active');

    });

    //  outside click of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    $('.portfolio-slider').owlCarousel({
        center: false,
        items: 1,
        loop: false,
        stagePadding: 0,
        margin: 20,
        nav: true,
        navText: ['<span class="fas fa-arrow-left">', '<span class="fas fa-arrow-right">'],
        responsive:{
        600:{
        	margin: 20,
          items: 1
        },
        1000:{
        	margin: 20,
          items: 1
        },
        1200:{
        	margin: 20,
          items: 1
        }
        }
    });
})(jQuery);