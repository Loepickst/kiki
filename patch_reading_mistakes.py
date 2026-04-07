import os
import glob
import re

html_files = glob.glob('/Users/kiki/Desktop/ki计划/read.jlpt/s/*.html')

# We want to replace the toggleOption function in each file with a new one that handles localStorage
new_js = """
    // === 错题本相关配置 ===
    const ARTICLE_LEVEL = 'N1';
    const ARTICLE_TYPE = 'short';

    // 选项点击逻辑（带本地缓存和动态判定）
    function toggleOption(element) {
        if (document.body.classList.contains('show-analysis')) {
            // 解析模式：展开解析内容
            element.classList.toggle('expanded');
            return;
        }
        
        const qaSection = element.closest('.qa-section');
        
        // 如果已经答过（锁定），则不允许修改答案
        if (qaSection.hasAttribute('data-answered')) {
            return;
        }
        
        // 判定对错
        const isCorrecimport os
import glob
import re

html_files = glob.glob('/elimpnt.clasimport re

html_fited
# We want to replace the toggleOption function in each file with a new one that'annew_js = 