// ���т��擾���܂�
export async function GET(
    req: Request
  ) {
    const { searchParams } = new URL(req.url)
  
    // �p�����[�^�̌���
    if (!searchParams.has('userId')) {
      // userId ���Ȃ��̂ŃG���[
      return new Response(JSON.stringify({ message: "userId is required" }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        }
      });
    }
  
    if (!searchParams.has('startDate')) {
      // startDate ���Ȃ��̂ŃG���[
      return new Response(JSON.stringify({ message: "startDate is required" }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        }
      });
    }
  
    if (!searchParams.has('endDate')) {
      // endDate ���Ȃ��̂ŃG���[
      return new Response(JSON.stringify({ message: "endDate is required" }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        }
      });
    }
  
    const userId = searchParams.get('userId')
    const startDate = searchParams.get('startDate')
    const endDate = searchParams.get('endDate')
  
    try {
      // Express �T�[�o�[�Ƀ��N�G�X�g
      const response = await fetch('http://localhost:4000/api/getRecordsList', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            "userId": userId,
            "startDate": startDate,
            "endDate": endDate
          }
          ),
      });
  
      if (response.ok) {
        // ���N�G�X�g������
        const jsonResponse = await response.json();
        return new Response(JSON.stringify(jsonResponse), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          }
        });
      } else {
        // ���N�G�X�g�����s
        return new Response(JSON.stringify({ message: response.statusText }), {
          status: response.status,
          headers: {
            'Content-Type': 'application/json',
          }
        });
      }
    } catch (error) {
      // �ʐM�����s (502�G���[:Bad Gateway�Ƃ���)
      return new Response(JSON.stringify({ message: "Failed to connect to the server" }), {
        status: 502,
        headers: {
          'Content-Type': 'application/json',
        }
      });
    }
  }