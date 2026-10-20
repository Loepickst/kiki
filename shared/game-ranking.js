/* GitHub edition: native games own local scores; no server submissions. */
(()=>{'use strict';const noop=()=>{};window.GameRanking={begin:()=>true,question:noop,clock:noop,answer:()=>null,hint:noop,skip:noop,finish:noop,retry:noop,cancel:noop};window.GameRankingSync={flush:async()=>[],pending:()=>0,subscribe:()=>noop};})();
