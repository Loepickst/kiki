import glob
import re

files = ['/Users/kiki/Desktop/ki计划/read.jlpt/s/2010.7.html', '/Users/kiki/Desktop/ki计划/read.jlpt/s/2010.12.html']

mistake_nav_js = """
    const isMistakeMode = urlParams.get('mode') === 'mistake';

    function navigateMistake(direction) {
        let mistakes = JSON.parse(localStorage.getItem('jlpt_read_mistakes') || '[]');
        let filtered = mistakes.filter(m => m.level === ARTICLE_LEVEL && m.type === ARTICLE_TYPE);
        
        const path = window.location.pathname.split('/').pop().replace('.html', '');
        const qid = `${path}-${currentPage}`;
        
        const currentIndex = filtered.findIndex(m => m.id === qid);
        
        if (currentIndex === -1) {
            // 如果当前题已经被移出错题本，找下一个错题
            if (filtered.length > 0) {
                window.location.href = filtered[0].url + import glob