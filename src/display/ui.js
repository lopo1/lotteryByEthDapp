import React from 'react'
import { Card, Icon, Image, Button, Statistic } from 'semantic-ui-react'

const CardExampleCard = (props) => (
  <Card>
    <Image src='/images/caipiao.jpg' />
    <Card.Content>
      <Card.Header>深圳福利彩票（南山站）</Card.Header>
      <Card.Meta>
        <p>管理员地址：{props.state.manager}</p>
        <p>当前地址地址：{props.state.currentAccount}</p>
      </Card.Meta>
      <Card.Description>
        每晚八点准时开奖，不见不散！
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {props.state.playerCounts} 人参与
      </a>
    </Card.Content>
    <Card.Content extra>
        <Statistic color='red'>
        <Statistic.Value>{props.state.balance}ETH</Statistic.Value>
        <Statistic.Label>奖金池</Statistic.Label>
        </Statistic>
    </Card.Content>
    <Card.Content extra>
    <Statistic color='pink'>
      <Statistic.Value>第{props.state.round}期</Statistic.Value>
      <a href='#'>点击我查看交易历史</a>
    </Statistic>
    </Card.Content>
    <Button animated='fade' color='orange' onClick={props.play} disabled={props.state.isClicked}>
      <Button.Content visible>投注产生希望</Button.Content>
      <Button.Content hidden>购买放飞梦想</Button.Content>
    </Button>
    <Button inverted color='red' style={{display:props.state.isShowbutton}} onClick={props.draw} disabled={props.state.isClicked}>
        开奖
      </Button>
      <Button inverted color='orange' style={{display:props.state.isShowbutton}} onClick={props.undraw} disabled={props.state.isClicked}>
        退奖
      </Button>
  </Card>
)

export default CardExampleCard
