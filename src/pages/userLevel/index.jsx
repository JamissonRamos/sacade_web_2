import { WrapPages } from '../../components/Wrappe/pages'
import * as S from './styled';
import { TextC } from '../../components/Typography'

const UserLevel = () => {
  return (
    <S.Content>
      <S.TableHeader>
        <S.TableRow>
          <S.TableHeaderCell>
            <TextC.Label level={1}>#</TextC.Label>
          </S.TableHeaderCell>
          <S.TableHeaderCell $flex={2}>
            <TextC.Label level={1}>Nome</TextC.Label>
          </S.TableHeaderCell>
          <S.TableHeaderCell>
            <TextC.Label level={1}>Status</TextC.Label>
          </S.TableHeaderCell>

        </S.TableRow>
      </S.TableHeader>
    </S.Content>
  );
}

export default UserLevel