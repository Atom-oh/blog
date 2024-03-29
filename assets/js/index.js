// 이미지 alt 속 내용을 캡션으로 만들어줌
$('.entry_content > p > img[alt]').replaceWith(function () {
    return '<figure>'
        + '<a href="' + $(this).attr('src') + '" class="mg-link">'
        + '<img src="' + $(this).attr('src') + '" width="' 
        + $(this).attr('width') + '"' + '/></a>'
        + '<figcaption class="caption">' + $(this).attr('alt') + '</figcaption>'
        + '</figure>';
});

// 이미지를 magnific popup image viewer에 연결시킴
$('.mg-link').magnificPopup({
    type: 'image',
    closeOnContentClick: true
});
