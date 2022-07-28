$(function(){
	var section=$('#contents>.parallax>div');
	var sectionInfo=[];
    var objectInfo=[];
	var totalSize=section.size();

	//1.각각의 섹션에 스타일을 fixed로 설정하고 각 섹션의 top값 배열에 넣기
	section.each(function(i){
		var tg=$(this);
		sectionInfo.push(tg.offset().top);

		//3.object에 시간차를 두고 섹션과 반대로 움직임 주기
		objectInfo.push([]);
		var child=tg.children();
       
		child.each(function(j){
			var t=$(this);
		    objectInfo[i][j]=t.position().top;
		});

		//다음 이전 버튼 클릭
		var upBtn=tg.find('>.tit>.arrow>a:eq(0)');
		var downBtn=tg.find('>.tit>.arrow>a:eq(1)');

		upBtn.click(function(e){
			e.preventDefault();
			if(i==0)return;
		    move(i-1);
		});

		downBtn.click(function(e){
			e.preventDefault();
			if(i==totalSize-1)return;
			 move(i+1);
		});
	});
	section.css('position','fixed');
	

    //move함수정의
	function move(sectionIndex){
		var tt=sectionInfo[sectionIndex];	
		$('html,body').animate({scrollTop:tt},{duration:600,ease:'easeOutCubic'});
	}


	//2.스크롤 이벤트 생성
	$(window).scroll(function(){
		var sct=$(window).scrollTop();
		
		//스크롤을 움직이면 스크롤의 이동값을 얻어 반대로 움직이도록 -1을 곱하고 배열에 저장한 위치값을 더합니다.
		section.each(function(i){
			var tg=$(this);
			var tt=-1*sct+sectionInfo[i];

			if(sct>sectionInfo[i])tt*=0.5;
			//섹션의 속도를 절반으로 줄임

			tg.css('top',tt);//스크롤 top값에 각 섹션의 top값 연결

			//4.스크롤 이동 위치에 따라 오브젝트의 최소값에서 최대값으로 이동
			var child=tg.children();
		
			child.each(function(j){
				var t=$(this);
				var start=sectionInfo[i];//시작(부모데이터)
				var end=sectionInfo[i+1];//끝(부모의 스크롤 끝값)
				var min=objectInfo[i][j];//각 오브젝트의 최소 이동값
				var max=objectInfo[i][j]+j*200+100;//각오브젝트의 최대 이동값
				if(!end)end=$(document).height();

				var objectTop=(sct-start)*(max-min)/(end - start)+min;
				//비례식을 이용하여 스크롤 이동값에 따라 오브젝트 이동값 구하기
				t.css('top',objectTop);
			});
		});
	});
});