(function($) {

	"use strict";	

  	$(".main-menu a").click(function(){
		var id =  $(this).attr('class');
		id = id.split('-');
		$('a.active').removeClass('active');
    	$(this).addClass('active');
		$("#menu-container .content").slideUp('slow');
		$("#menu-container #menu-"+id[1]).slideDown('slow');		
		$("#menu-container .homepage").slideUp('slow');
		return false;
	});


	$(".main-menu a.homebutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .homepage").slideDown('slow');
		$(".logo-top-margin").animate({marginLeft:'45%'}, "slow");
		$(".logo-top-margin").animate({marginTop:'120px'}, "slow");
		return false;
	});

	$(".main-menu a.aboutbutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .about-section").slideDown('slow');
		$(".logo-top-margin").animate({marginTop:'0'}, "slow");
		$(".logo-top-margin").animate({marginLeft:'0'}, "slow");
		return false;
	});

	$(".main-menu a.projectbutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .gallery-section").slideDown('slow');
		$(".logo-top-margin").animate({marginTop:'0'}, "slow");
		$(".logo-top-margin").animate({marginLeft:'0'}, "slow");
		return false;
	});

	$(".main-menu a.contactbutton").click(function(){
		$("#menu-container .content").fadeOut();
		$("#menu-container .contact-section").slideDown('slow');
		$(".logo-top-margin").animate({marginTop:'0'}, "slow");
		$(".logo-top-margin").animate({marginLeft:'0'}, "slow");
		return false;
	});

	$('.toggle-menu').click(function(){
        $('.show-menu').stop(true,true).slideToggle();
        return false;
    });

    $('.show-menu a').click(function() {
    	$('.show-menu').fadeOut('slow');
    });
    
    $(".a1").click(function(){
    	$(".img01").attr("src","images/img04.png");
    	$(".title01").html("项目一：风雨ホ乔平台");
    	$(".p02").html("<strong>项目描述：</strong>网络社交平台主要是为用户之间进行沟通交流，对同一事务的观点和想法。用户可以通过网站查看其他用户发的帖子、评论的内容、浏览人数。整个项目是基于J2EE模式，应用源生的java、servlet、jdbc、jsp、css实现了一个社交平台的管理系统。分为View层（显示层）、Control层（控制层）、Service层（业务逻辑层）、DAO层（数据库访问对象层）。");
    	$(".p01").html("<strong>责任描述：</strong><br /> 1.负责项目的功能做出相应的需求计划、合理的安排每天的代码量。<br /> 2.负责项目环境的搭建，包括使用的Jar包和系统的环境变量。<br /> 3.负责社交系统的设计任务，包括软件的设计和用户界面的设计、数据库的设计。<br /> 4.负责管理员的删帖、创建文章类型、用户注册、登录、发帖、评论模块编写及测试。<br /> 5.后期的用户交互测试和模块之间的整合工作。");
    })
    
    $(".a2").click(function(){
    	$(".img01").attr("src","images/img06.png");
    	$(".title01").html("项目二：课程管理及工作分配系统");
    	$(".p02").html("<strong>项目描述：</strong>使用Spring、Springmvc、myBatis实现对课程资料的管理，对用户资料管理，对管理员资料管理以及班级资料管理等等功能，通过这个系统用户可以更加方便对课程资料、学生资料、学生成绩进行添加、修改和删除操作。不仅如此，还可以对用户添加和修改操作非常的方便。");
    	$(".p01").html("<strong>责任描述：</strong><br /> 1.负责项目初期的需求分析、功能划分、数据库设计。<br />2.负责项目环境的搭建，包括使用的Jar包和系统的环境变量。<br />3.负责课程管理系统的用户界面的设计、数据库的设计。<br />4.使用Mybatis对数据库进行添加班级、查看用户信息、课程表和分配工作等操作。<br />5.使用SpringMVC进行前段和服务器的交互以及页面之间的跳转。<br />6.整合Spring、Springmvc和Mybatis功能。<br />7.总结并提交开发文档。");
    })
    
    $(".a3").click(function(){
    	$(".img01").attr("src","images/img05.png");
    	$(".title01").html("功能一：封装POI的导入功能");
    	$(".p02").html("<strong>项目描述：</strong>点击导入选择文档，提交之后，能自定义表名，在数据库中新建一个表，把导入的数据分批添加到表中（每2000条数据添加一次），也可以在原有的数据表后添加新导入的数据。");
    	$(".p01").html("<strong>责任描述：</strong><br /> 1.读取Excel文件中的内容，获取Excel单元格内容,对内容进行格式判断，分析单元格为什么类型<br />2.根据要导入数据的组，添加数据，当数据量过大时，使用分批添加数据。");
    })
    
    
    


})(jQuery);