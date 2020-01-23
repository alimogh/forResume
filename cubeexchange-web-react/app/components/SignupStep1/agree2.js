import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(0),
  },
  agreeContent: {
    overflow: 'auto',
    maxHeight: 218,
    fontFamily: 'NotoSansCJKkr',
    fontSize: 12,
  },
  agreeP: {
    paddingTop: 1,
    paddingBpttom: 1,
    marginTop: 1,
    marginBottom: 1,
  },
  ls2: {
    paddingTop: 1,
    paddingBpttom: 1,
    marginTop: 1,
    marginBottom: 1,
  },
}));
function Agree2() {
  const classes = useStyles();
  return (
    <div className={classes.agreeContent}>
      <div>
        <p className={classes.agreeP}>
          <em className="emphasis">
            &lt;Cube Exchange&gt;{`('http://www.cube.co.kr'이하 'cube')`}
          </em>
          은(는) 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고
          개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과
          같은 처리방침을 두고 있습니다.
        </p>
        <p className={classes.agreeP}>
          <em className="emphasis">&lt;Cube Exchange&gt;{`('cube')`}</em> 은(는)
          회사는 개인정보처리방침을 개정하는 경우 웹사이트 공지사항(또는
          개별공지)을 통하여 공지할 것입니다.
        </p>
        <p className={classes.agreeP}>
          ○ 본 방침은부터 <em className="emphasis">2019</em>년{' '}
          <em className="emphasis">1</em>월 <em className="emphasis">1</em>
          일부터 시행됩니다.
        </p>
        <br />
        <p className="lh6 bs4">
          <strong>
            1. 개인정보의 처리 목적{' '}
            <em className="emphasis">
              &lt;Cube Exchange&gt;{`('http://www.cube.co.kr'이하 'cube')`}
            </em>
            은(는) 개인정보를 다음의 목적을 위해 처리합니다. 처리한 개인정보는
            다음의 목적이외의 용도로는 사용되지 않으며 이용 목적이 변경될 시에는
            사전동의를 구할 예정입니다.
          </strong>
        </p>
        <p className={classes.agreeP}>가. 홈페이지 회원가입 및 관리</p>
        <p className={classes.agreeP}>
          회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격
          유지·관리, 제한적 본인확인제 시행에 따른 본인확인, 서비스 부정이용
          방지, 각종 고지·통지, 분쟁 조정을 위한 기록 보존 등을 목적으로
          개인정보를 처리합니다.
        </p>
        <br />
        <p className={classes.agreeP}>나. 민원사무 처리</p>
        <p className={classes.agreeP}>
          민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리결과
          통보 등을 목적으로 개인정보를 처리합니다.
        </p>
        <br />
        <p className={classes.agreeP}>다. 재화 또는 서비스 제공</p>
        <p className={classes.agreeP}>
          콘텐츠 제공, 맞춤 서비스 제공, 본인인증 등을 목적으로 개인정보를
          처리합니다.
        </p>
        <br />
        <p className={classes.agreeP}>라. 마케팅 및 광고에의 활용</p>
        <p className={classes.agreeP}>
          신규 서비스(제품) 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공
          및 참여기회 제공 , 인구통계학적 특성에 따른 서비스 제공 및 광고 게재 ,
          서비스의 유효성 확인, 접속빈도 파악 또는 회원의 서비스 이용에 대한
          통계 등을 목적으로 개인정보를 처리합니다.
        </p>
        <br />
        <p className="lh6 bs4">
          <strong>
            2. 개인정보 파일 현황
            <br />
          </strong>
        </p>
        <p className={classes.agreeP}>
          1. 개인정보 파일명 : Cube Exchange
          <br /> - 개인정보 항목 : 이메일, 휴대전화번호, 자택주소, 비밀번호
          질문과 답, 비밀번호, 로그인ID, 성별, 생년월일, 이름, 기념일, 결혼여부,
          취미, 서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보, 결제기록
          <br />
          - 수집방법 : 홈페이지
          <br /> - 보유근거 : Cube Exchange 개인정보처리방침
          <br /> - 보유기간 : 1년
          <br /> - 관련법령 : 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년,
          계약 또는 청약철회 등에 관한 기록 : 5년
        </p>
        <br />
        <p className="lh6 bs4">
          <strong>3. 개인정보의 처리 및 보유 기간</strong>
          <br />
          <br />①{' '}
          <em className="emphasis">&lt;Cube Exchange&gt;{`('cube')`}</em>
          은(는) 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터
          개인정보를 수집시에 동의 받은 개인정보 보유,이용기간 내에서 개인정보를
          처리,보유합니다.
          <br />
          <br />② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
        </p>
        1.&lt;홈페이지 회원가입 및 관리&gt;
        <br />
        &lt;홈페이지 회원가입 및 관리&gt;와 관련한 개인정보는 수집.이용에 관한
        동의일로부터&lt;1년&gt;까지 위 이용목적을 위하여 보유.이용됩니다.
        <br />
        -보유근거 : Cube Exchange 개인정보처리방침
        <br />
        -관련법령 : 1)소비자의 불만 또는 분쟁처리에 관한 기록 : 3년
        <br />
        2) 계약 또는 청약철회 등에 관한 기록 : 5년
        <br />
        <br />
        -예외사유 : <br />
        <br />
        <p className="lh6 bs4">
          <strong>4. 개인정보의 제3자 제공에 관한 사항</strong>
          <br />
          <br /> ①{' '}
          <em className="emphasis">
            &lt;Cube Exchange&gt;{`('http://www.cube.co.kr'이하 'cube')`}
          </em>
          은(는) 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조
          및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
        </p>
        ②{' '}
        <em className="emphasis">
          &lt;Cube Exchange&gt;{`('http://www.cube.co.kr')`}
        </em>
        은(는) 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.
        <br />
        <p className="lh6 bs4">
          <strong>5. 개인정보처리 위탁</strong>
          <br />
          <br /> ①{' '}
          <em className="emphasis">&lt;Cube Exchange&gt;{`('cube')`}</em>
          은(는) 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보
          처리업무를 위탁하고 있습니다.
        </p>
        ②{' '}
        <em className="emphasis">
          &lt;Cube Exchange&gt;{`('http://www.cube.co.kr'이하 'cube')`}
        </em>
        은(는) 위탁계약 체결시 개인정보 보호법 제25조에 따라 위탁업무 수행목적
        외 개인정보 처리금지, 기술적․관리적 보호조치, 재위탁 제한, 수탁자에 대한
        관리․감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고,
        수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.
        <br />
        <br />③ 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본
        개인정보 처리방침을 통하여 공개하도록 하겠습니다.
        <br />
        <p className="lh6 bs4">
          <strong>
            6. 정보주체와 법정대리인의 권리·의무 및 그 행사방법 이용자는
            개인정보주체로써 다음과 같은 권리를 행사할 수 있습니다.
          </strong>
        </p>
        <p className={classes.agreeP}>
          ① 정보주체는 Cube Exchange에 대해 언제든지 개인정보
          열람,정정,삭제,처리정지 요구 등의 권리를 행사할 수 있습니다.
          <br />② 제1항에 따른 권리 행사는 Cube Exchange에 대해 개인정보 보호법
          시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여
          하실 수 있으며 Cube Exchange은(는) 이에 대해 지체 없이 조치하겠습니다.
          <br />③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은
          자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법
          시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.
          <br />④ 개인정보 열람 및 처리정지 요구는 개인정보보호법 제35조 제5항,
          제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.
          <br />⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가
          수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.
          <br />⑥ Cube Exchange은(는) 정보주체 권리에 따른 열람의 요구,
          정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나
          정당한 대리인인지를 확인합니다.
        </p>
        <br />
        <p className="lh6 bs4">
          <strong>7. 처리하는 개인정보의 항목 작성 </strong>
          <br />
          <br /> ①{' '}
          <em className="emphasis">
            &lt;Cube Exchange&gt;{`('http://www.cube.co.kr'이하 'cube')`}
          </em>
          은(는) 다음의 개인정보 항목을 처리하고 있습니다.
        </p>
        <p className={classes.agreeP}>
          1&lt;홈페이지 회원가입 및 관리&gt;
          <br />- 필수항목 : 이메일, 휴대전화번호, 자택주소, 비밀번호 질문과 답,
          비밀번호, 로그인ID, 성별, 생년월일, 이름, 기념일, 결혼여부, 취미,
          서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보, 결제기록
          <br />- 선택항목 : 이메일, 휴대전화번호, 자택주소, 비밀번호 질문과 답,
          비밀번호, 로그인ID, 성별, 생년월일, 이름, 기념일, 결혼여부, 취미,
          서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보, 결제기록
        </p>
        <br />
        <p className="lh6 bs4">
          <strong>
            8. 개인정보의 파기
            <em className="emphasis">&lt;Cube Exchange&gt;{`('cube')`}</em>
            은(는) 원칙적으로 개인정보 처리목적이 달성된 경우에는 지체없이 해당
            개인정보를 파기합니다. 파기의 절차, 기한 및 방법은 다음과 같습니다.
          </strong>
        </p>
        <p className={classes.agreeP}>
          -파기절차
          <br />
          이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우
          별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후
          혹은 즉시 파기됩니다. 이 때, DB로 옮겨진 개인정보는 법률에 의한 경우가
          아니고서는 다른 목적으로 이용되지 않습니다.
          <br />
          -파기기한
          <br />
          이용자의 개인정보는 개인정보의 보유기간이 경과된 경우에는 보유기간의
          종료일로부터 5일 이내에, 개인정보의 처리 목적 달성, 해당 서비스의
          폐지, 사업의 종료 등 그 개인정보가 불필요하게 되었을 때에는 개인정보의
          처리가 불필요한 것으로 인정되는 날로부터 5일 이내에 그 개인정보를
          파기합니다.
        </p>
        <p className={classes.agreeP}>
          -파기방법
          <br />
          전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을
          사용합니다.
        </p>
        <br />
        <p className="lh6 bs4">
          <strong>
            9. 개인정보 자동 수집 장치의 설치•운영 및 거부에 관한 사항
          </strong>
        </p>
        <p className={classes.agreeP}>
          ① Cube Exchange 은 개별적인 맞춤서비스를 제공하기 위해 이용정보를
          저장하고 수시로 불러오는 ‘쿠기(cookie)’를 사용합니다. ② 쿠키는
          웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터
          브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의
          하드디스크에 저장되기도 합니다. 가. 쿠키의 사용 목적 : 이용자가 방문한
          각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속
          여부, 등을 파악하여 이용자에게 최적화된 정보 제공을 위해 사용됩니다.
          나. 쿠키의 설치•운영 및 거부 : 웹브라우저 상단의 도구&gt;인터넷
          옵션&gt;개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수
          있습니다. 다. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이
          발생할 수 있습니다.
          <br />
        </p>
        <p className="lh6 bs4">
          <strong>10. 개인정보 보호책임자 작성 </strong>
        </p>
        <br /> ① Cube Exchange(‘http://www.cube.co.kr’이하 ‘cube) 은(는)
        개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한
        정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보
        보호책임자를 지정하고 있습니다.
        <p className={classes.agreeP}>
          <br />▶ 개인정보 보호책임자 <br />
          성명 :김태림
          <br />
          직책 :개발팀장
          <br />
          직급 :개발팀장
          <br />
          연락처 :01030982101, dev.cubeexchange@gmail.com, <br />※ 개인정보 보호
          담당부서로 연결됩니다.
          <br /> <br />▶ 개인정보 보호 담당부서
          <br />
          부서명 :<br />
          담당자 :<br />
          연락처 :, , <br />② 정보주체께서는 Cube
          Exchange(‘http://www.cube.co.kr’이하 ‘cube) 의 서비스(또는 사업)을
          이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제
          등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수
          있습니다. cube(‘http://www.cube.co.kr’이하 ‘cube) 은(는) 정보주체의
          문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
        </p>
        <br />
        <p className="lh6 bs4">
          <strong>11. 개인정보 처리방침 변경 </strong>
        </p>
        <p>
          ①이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른
          변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일
          전부터 공지사항을 통하여 고지할 것입니다.
        </p>
        <br />
        <p className="lh6 bs4">
          <strong>
            12. 개인정보의 안전성 확보 조치{' '}
            <em className="emphasis">&lt;Cube Exchange&gt;{`('cube')`}</em>
            은(는) 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한
            기술적/관리적 및 물리적 조치를 하고 있습니다.
          </strong>
        </p>
        <p className={classes.agreeP}>
          1. 정기적인 자체 감사 실시
          <br /> 개인정보 취급 관련 안정성 확보를 위해 정기적(분기 1회)으로 자체
          감사를 실시하고 있습니다.
          <br />
          <br />
          2. 개인정보 취급 직원의 최소화 및 교육
          <br /> 개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화
          하여 개인정보를 관리하는 대책을 시행하고 있습니다.
          <br />
          <br />
          3. 내부관리계획의 수립 및 시행
          <br /> 개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고
          시행하고 있습니다.
          <br />
          <br />
          4. 해킹 등에 대비한 기술적 대책
          <br />
          <em className="emphasis">Cube Exchange</em>
          {`('cube')`}은 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및
          훼손을 막기 위하여 보안프로그램을 설치하고 주기적인 갱신·점검을 하며
          외부로부터 접근이 통제된 구역에 시스템을 설치하고 기술적/물리적으로
          감시 및 차단하고 있습니다.
          <br />
          5. 개인정보의 암호화
          <br /> 이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고
          있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를
          암호화 하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고
          있습니다.
          <br />
          6. 접속기록의 보관 및 위변조 방지
          <br /> 개인정보처리시스템에 접속한 기록을 최소 6개월 이상 보관,
          관리하고 있으며, 접속 기록이 위변조 및 도난, 분실되지 않도록 보안기능
          사용하고 있습니다.
          <br />
          7. 개인정보에 대한 접근 제한
          <br /> 개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의
          부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한
          조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을
          통제하고 있습니다.
          <br />
          8. 문서보안을 위한 잠금장치 사용
          <br /> 개인정보가 포함된 서류, 보조저장매체 등을 잠금장치가 있는
          안전한 장소에 보관하고 있습니다.
          <br />
          9. 비인가자에 대한 출입 통제
          <br /> 개인정보를 보관하고 있는 물리적 보관 장소를 별도로 두고 이에
          대해 출입통제 절차를 수립, 운영하고 있습니다.
          <br />
        </p>
        <p />
      </div>
    </div>
  );
}

export default Agree2;
