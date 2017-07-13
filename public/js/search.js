$(document).ready(function() {
	$('#searchValue').keypress(function(event) {
		if (event.keyCode == 13) {
			// radio버튼을 누른 value가져옴
			let sItem = $(':radio[name="searchItem"]:checked').val()
			
			if(sItem =='news'){
				$.post('/naver/news',{searchValue : $(this).val()},
						function(result){
					$('#resultBody').html(result)					
				})
				
				
			}else if(sItem =='blog'){
				$.post('/naver/blog',{searchValue : $(this).val()},
						function(result){
					$('#resultBody').html(result)
				})
			}
		}
	})
})
