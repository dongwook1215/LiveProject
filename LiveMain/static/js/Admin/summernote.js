$(document).ready(function() {
    $('#summernote').summernote({
        height: 300, // 에디터 높이
        minHeight: null,             // 최소 높이
        maxHeight: null,          // 최대 높이
        maxWidth: 1200,
        width: '100%',
        focus: true,                  // 에디터 로딩후 포커스를 맞출지 여부
        disableResizeEditor: true,
        backColor: "white",
        lang: "ko-KR",					// 한글 설정
        airMode: false,
        disableDragAndDrop: true,
        codeviewFilterRegex: 'custom-regex',
        codeviewIframeWhitelistSrc: ['my-own-domainname']
    });
});