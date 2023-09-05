import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import {styles} from './homestyles';
import {Data} from '../../config/HomeData';
import {ActivityIndicator} from 'react-native';
import {Image, Header, SearchBar, Overlay} from 'react-native-elements';
import SideBar from '../Sidebar/Sidebar';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const ProductCard = ({item, onIncrement, onDecrement}) => {
  return (
    <View style={styles.productCard}>
      <Image
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR8AAACwCAMAAAABtJrwAAAAyVBMVEUAMWH////m5ubl5eXk5OT8/Pzz8/P4+Pj19fX6+vru7u7t7e3q6uoAL2AALV8AKV0AJVsAAEgAIloAAEsAHFcAFFLPy8wAHVcpO2OBh5kAJlsAGFT08e0AAEYADlAAE1JMWHbJyc8ACk+QlKNATm+hpLC6usIZMV1wd42oqrXHx85lbYU3R2vY19owP2J4fpIAAD5ZYXqrsr+OjphVWnFxcYAAHVAdNmFKVXNdZ4AAAEHY1dSlpa+YmaOIjZ+yr7NlZngAADgTKFRuazB4AAAYQUlEQVR4nOVdC3vauNJGxvL9wrUE2ECAhAQSwqbbTZqeJrun//9HfZJsyZKvkm2g5/lmt4niwaB5GY1mpNG4AxCZXU3rmriFGy5uOKil44aNL1m4pSHycMPAPIgaUEc8A1/yKM/CPBu3MM/BDRdd0igv+hjGczTPw5/n7rfbuymj3Wq/ty3Hcch95GMs4WMKupB8TLYLXVFSXU7SzqXx2e4eH8Pr4WgyGYSMBqPRpH/99PiwO1jRJ/9/w8fzoHHYvQRDDEsnnwIE1Lj/9LI7eIZ3UXz0bleP8EEU34UukbswL7oLXYruwpeizqFG1DnEizpHeQA1aOcQMR7puGd8ufs+WQyCAmRElAaLX+87nX6MXBfsTBd0UVJdStJux0RkuYgs1LBxw7FRw8AtxjMwz4l5JuOZBTyL8eyY59rsY2wIDtPX5SDwJcCJyQ8n47ePA7AciS5YlV0okdRKSdPB6EU46hkcMS/5ugD9uiJV13ke1Zj4q0S87Fepk6/S3E/745kCNkyPBourT0fQGOFjoPAxnp5RWsZz9TxtSqEQS9rRmKmssjggM9zVTYF9d7voqWNDIZoNb7fQzTd6kH5MpTVikkrY3TPi49n6cShlcsogGoVT3dDOh8+JxlfGVHrW/mY4awYOIX/We18BoQunHF8WJuSJOfi3iRsGbhn0kkUvEZ5jKvPIJQOsbpYNVSdBKFzeHKCh2AXCk5fUiN7qpPO7Tp0PZ3W7aAsdQsH65uCCki60NL/r5/APjdVNu+gQhIZHI9OF/0n/2fgctY4Optny42z+M6LoLkSxnUIUKTCi6C7UiLWO58UWWaeuCCJI3wp3bhcOang7MuSPng9ApgvIIsc9LpPUZpJ2E0nx/K5Jze9dojHd3Pk9hxd11dVvxidCBxMaZExjINV/0gW3bH7X+PmdSVrs/6Q4OndXt5b/QyNSsJsUBZ8t0WB5yPd/uk39H/0M/uHL8oTKE5HfP57cf84iR+e5PP2h0ynPy3x5eKo9vJ5YeSIaXHXRB+Z3AVujzISR4IN5sV9TgELHQ+RA24YObtmILNywUAO6lGdQnokbBuW5iGcTnomZhEffygW74cmVJ6JgvDXzuuBBXhpblFTgQS9fUstO+Ye6XuBnY23Sc6ONolD6cXkedBD582N5NI8iCr0youDiqkTSU/k/1mv9ML0GTb7Bshnrt/MP9/5JXMJiml153hnWV8u0Tj7+Avv1meFBRuh17+bEXwoRuyApG18GJhLHCo2cS1b+pSwPbhdnssw8+YsVLOpeQY8lJO0kEXuVxgAgrP9ktImt/3wOz48OBqh/AIJCK6z/ZFE43frqcd6CsEEQzsJAZQ0f0fVBWHv9PddXm8MT9Objq5u/p3/fXvXUlvKv927b+EjGsRXRPAuX7em4KTrrq82K9Ai/+erzXmHd0R/vPbq+ily5aHzhXtHuidG8Xb1u0YGITA1NjhaAEBA/Ejewj6lhni3wXNwwNJ5nUJ6HG9uGXqG/fD4AkVY3a2kd8tcHYOFe2bh/miANbhCeiVhAy0hq5kkaz+8sDpGO5jMRO+GtGprmwf0Kv28CDml+uR9IA9Q/2DlLmMz/YZLm+D95krbrH676zeBZTPG7oi+Ogwj/BaYLeYAMrX3/UEp/MhF7Wn+c10Z+jz/cJoozfXxZcYNsKz3Ggmetvv5k1i2I/YniWNyK4lhEJI4lo1LguYyHB3gcLiMi0bz91shr9tcrTm++9xb7BB4bAST7PrMbJI8pSONQaXIkdUolbXP+emwWko457QHgJRjto7FFNUjatI02Lc5f7fk/n80cn/kdsAV8JgJeAHyMZN8KKeLv5x/um01dwU1sitEQQ7/u3vzO/Pp5RwccROC9SC9H/mmXrs+r4FOx/y4df1mKsUCahh4FAqHk/pqQdwvv+bnek/4GgitLLf7SC+Mvox0Cj81yD3obhgTCehbgPIRZEL4Dfq7/kHaDJhvYjlwtrf8Yu4ZhxQ/O4QFHZOh799Ppy593gCdT3n8Yrqo1RkbSlvzDQ8ONnPCYoAPtud8JH8mIYoMu+vkgbYH8X+B3Wl+9abiTM+aDrv8s8AXUH5uf3zGt5KfI3vE32n9vOro6Qx6Jr5NOZ3lIQRORwmpHv9vK/nuVH+kIHrMpeswxz5g3XE8NXvhxpK/5ASdY6Ed5PQ2eIPOY5b3pdNxQY/+0m9o/1Z2GcxcK2z94JYFYS+ZHSJweHibkgyq46POv+A7J/dMT7r9reuP15sFXALj5fYM95cHbCmTG2H4i/6b+K779NPvvEvkbTH+M28abOeMvgpaAW+zokOQVyOYuQgoGOjLReQlbgv5I5G9oLCuGeOQmbrDjDm6kI4hwF23cEPXH3DY1zp3O4j8pPfmXZA2N/uZBw7+U8PHnSDAL99iko6FI0iT/R5AU4RPh2GD+spurD8OHjicT/Bzjdx1vgDjGlPDpzB6cxvMXuauB/+PtW8hDGO1BCgigPeOpam1R4CLuQQkff7LSLu0fOi2oT2fyleHCUIJP6I3Taxxb6TUOQuHRaX3/XXI3NY6/WlGfTk+Y3wk6EPwH6crsKGCmNL9j6tMUbImIPT/+EhPNS7LKozz4FM8wn9rIRKD+IUGCoTGiYVjC/Kb4ab2pLfS4KLe+EIX65y8ijOXXZErpWhxbEU38lOMIgPIGQB/384Lnm+Qj6lIacWvxEOzIh94hJ2i54vwfCPbKS7i9jXfJ9dWW1EcYRxA8L56nn1cDskoBecVS/zb8e/eE66v5GYfc+aY76RU9vs+I0teGTgKQOfGDGVlCHIrTlyO9S5jQfK/JjK+ivMtOlLHqulGOZ3QqE2elooZHeW4OD6eLmnaNDcHe4vXq7dcyFdKieN2mA+nQJ2vZ/iA9ux9rxMHI9Nvx+VNBUi9X0gwKtc43dWlG1FbZHvizDf4S7cNnksAZ4ElprbPx5f78/muOtGxjAZMbdUCv40r4I487Qq1+fllyHII8/1BlOSam9R9M4E+yIxpO+s8vCKrgFkCbLfXA7SB4T6DBF01Qz5XAU+Ap/We9GB9b/Rxyn+GD99R7y/5xi9QJ++CjD35+306YT0Rpo7C2wVHwVAefbr7/rHZ+UH267QwT/YFgNSXLzjYaOQjo9Y6FWXjkhi9CFgf4R3oDPv2RepPzgw32350azg+vPxx9YKT7XwFLbdm/3n+jyJAf8tvvaUIukNT+uyeg0ML+u1tj9irAB7xjaz3ciRe58fZPjak9puDJuYh/6CkG0wwfyI0jRrdYF8cPaMqyRR7Ei+vv9eHBMUYz/1DS4kT4JPGX+1nDHSnSn2g5o9P7tRX1hvyBjFEHr7fWzJ8Z7LIFUwrzn1ModKKz3rgWBzkjjut0kIAWtxx6yaCXLPZyx7HrzLcJPmzRlMyE7/1orPrzt8gphCyU316R7aPBM9wMa83w4QOk0pRJmsMzzMr9d8hrk1Axwa1jMYec/nAbW49JnBJM0JxvxM60tT3OotPPa5ya6N3WiWc6fVtt/51bt2jgH+5rmB//zz+YznA4pQKrcDJ8/f7y8nLzqz+JXKzB6xaFCQi0o3yub0Lzg3eB9VXVtTws+FLnNiMSfLI7aH6AiWKx/rDoi7cjdYAGu4b4yI2vVEUSdfMzuzUEl4+ZGNgrFXrCZyIe1I0Q8oBqjy/BMrkl9jmusZTYZ2V/tvc9ozpMK4Y9RmF2+WP57ZAMSvdeFSD/HuBqUmqSxva59vyuthXFwcNDxKDSPqebmB7urwaLSU/I1wuHjyaL5S1lgHAMX3N+r+sfujvFqWR2m/FruN+iTrn6bvP0OuZHXe8pudNVPRm9wJ0/r//sbNTMc/hE4cgMr9xMH6Qmh+n9OoFozaVQHRQTaga72vjUjU8ttX1Bf6Qn4nFZBwXYMCCmr7T4C7+ErxqtDnAeY734lOCoemoV8+6VvsI13Yiw0ykZJUQmre1TdADs2uPx3Sg5X8GToXL+XVPxD/PXx7pmqIJPL1lehiI6UGzngbb6vuj1hj+5u9B73LK1FYnE6+DWaLQ+pu4fageViNoPolNLmDzWEra2+CEnDjuc1jL9aw8s4R6Pfn7wUP1N+QP9nPVF8WH3g8piOT6ZQz4IeDf9B05rqsdYluIFs008f86mh2pjtKb4KK/Pk50NN3cPxy3hGfK57Ogr/kaB0JdhcJsvcaqVCyD3Qgjj1bnZUWKbYN11yqQp5tXeH1TZGRzq0CYjx54End40HxPIBloywnLUKxmb8eZS7xNUj/XR9tz77wr4JNm7+ODA8MDl+OQrToHOpL3uaAadrwB4rrJAOMHovP6hQvS+iDw7CI2l3xl/AJsbOiUGKI1i5qXREO9j3KtWMuvjUze/RTJ6D8Kwd0VFQyNizif0ZMSG8QYGTGa1XGiivw1sgQYbIKHMBJ9a40uoLyqbNeQ4UMp9DodPjw+PW3ruTfvz+kOQMGkXe9Iw/UJ6xQbvYSe4BzL4DO4sp5akdfPrpJKe548eJyI+no9+2rzQZQFG6dxPYNqOgjnp5EfVYB/ceTXz68hd6v6hDD44O7dcxPSFfHvNOZDilG/1X6M8gJuqziB8zru+KoEPS1nJR4Nd4yd00XmG3EtyoT3a0S2VHnRDfNTzwyXw6Rvl6JRdL+DABLOEb0tk/SbjSzU/XMi6jzDOZt2Tkg1kn4qdL6jEBx9ITmQCvM3hxwkfk4rDC4p/CKaKR88G1euJeP7qykjKePR8Qd3zKZX4hA+CIPRLz4vbBX8os/mTgiONpg2O1a5qgf8jdz6lln9YiU/vrzyhMn/kmZhizzF7EYIPiZWEZv5znfNxlf4hwSctab7bI2udYM4/8JfMQkKx/sjVF1U+X1kdM1P9yRrUAijojnt2BMIMxvE/09xeScWBg69A4XylzZ2vjHBUnr+8Spc1wicVUop2qBCyXHuTRz8kS5PXn7/IXer+j1e5/oPxyfVbMuYn40SLtpwPP/g9V/zjWgqdC/iHcvhw4oKsVqR9QZAeSWksebwiksVnvGrmH0qu6ifxl7etyibl7A8nNsxAkA+G8KpCJ9qT3eNe6Fo2/pKqL0GqcFjkf76Rd4kRvlS5/hw+gLTqFEzZsOhlUPyRvbKS3eUZ6pZVS9LS9Z+y/ffKNU3qP2eGBUz+SiOT7xtl8aJXKpWY9gVv3pat/7RfX9R8q4oJh17eWCqet4SNseydeTdNJTMgI3zOur5qVu6fogFml2BSoDG5L0ubIorfleQeNzk+dd79d+dYuamyvMuKWhE15DoEyb1QvGrInryX2n8vqS+qWvUOFxOVWKCfP0ZJCbYYFCQ6IMzvUBhaHJgFxh1Km5/OfOWmPGYgW98Pf1Kd+pBSR/XD5du3v//9J+MBCppUNMAghS17NUbzRTaFZHHQzl1fFMhtMPth2HsrAECQNnU17SVm1An3UXaL27+3GuZnqusPlPZdO4svCQiQ6UX+5J3nMOfgSX78lN2iDF5Ql2vqjzDyWH1jKFT9TXi46i+xP5pEBJ90LyVvqf8MhVYGK+6idEXB3qcTlV9OqiWx+sacpF6OpPXPN1VH8IyGB/GgZFrQ3F0eMSDlLHv0wwQ76RQpvAV99vqiCgmssQLl2JBUgJqE5yUBSTRIbfhLOkErqnJy7vNNlrQB6qz3gAtMRQyyGiP+LV5PuPIJNsEVqI9P3fjL67oq1QizkRZri06RgGCeHsVtTf7b6X2Qe+rFX1GYWueJGqb0/BGXusqTPyN+lvJBVDjdMF+VPdqkXNIm9UUdhWrq860IBbNDwnAibp/gUqdBpDhNFdKz+k2eL0PuquEf4o7KhocdfO5Ny+hNesZOuULpJk8qNc/C90vVj1JJoQ8CS1QeUTeKh1gaJ/xaXaXc63x/qfqiukrluuAZ5qlOSYQOs4CSf9DrqeTuX8Pm9UW5p87RGDf71Dnkc8T7X/Hz9dROoPZe8ncD00VoMxvt6RtcpYeAh0crJY28pA3rizpq5W0G30yQsjo5f+T5ARxQNtBmSic/Rl+9Js9nbFQfyVErDRne8znwOVN8+txKJopFv/VXtYMx9+5l6osS7BSL+wXBIW2cs4F8ESt+wRe1UgG9jVNcX7QMn7z6ot2s/oj5P/gZwnx9UdUKJf5/k/PdxWFGAV4xPmo6uz54CQbp/J+spAIKzeuLWhPFk3zDPwrVpUCD0j/U8Il2mS5WX1RhkSOiqH5CETiQ/RZawvyuhs+S5KZfrr6o86MOPhQRwc3J+tEZLVLWH5+kR1+wvqg7VTuGSvHJmb2zU1Xuq5Twmeyiw8T16yPVzJ+nPENXOwZP6tvkmd5UMFbgIiqOL6Q+OdKcq75oxDsqKVCsP3kxOkyjk9IgOr8r4DP/Wvtpsa0939NTOmvN7A83lmzTzgCG1zkgzNM0BXyw9bn485ugUhWy4vpIeRcPlsBWtT940enEz2+qqC8K8DF+lacJ9//I2pj948dKz0Cz//w2/1PPIiePT/AM6j+NmdUXNU128tKMT16iS+RUpmnzPCc6lcl4qIkbBtgpFCak/g9vdfbrwWhxff3tAdHmiH8+/7geT1AYuuZhU/Z/livUUwNLE9cXZdKYdkrSPB6RtFH9Q/r8JoVSAeL4ilCKCy0FIaIe/hHSqI7iw6vQF9ld5eDGKqlIInt+mdxV3z8k1mgvP8cvWRWNZJQVp2FgfNKukXTSRl9ntvVC9UWZtZavwzpagRTZJcu0g1361fIHgwfTJs9v6raxvsqe3+RJV/rDWZs2rxPoZ/FGaPivsARLmpJrln6Yt6OsHp/W3n/nee5Oep1jsUqgiVo/SwYMfQZqbJuhDWQ/abnSFJ/v2Xp9Ua5aifxWj3+vc8qDaFu23uUPUk+rlt30H0yN3+n5nsCRf7bk+MNN5D08lE/X/nyjJa/Wp5IfE1zh/rWBj3zF8AgfLv4SZnv5OcwfzK8YLaosu99bsBe/LWRjvfUe9S/Ch/cP69UXdaOqbi5Xo86lVd1cJ8szxIpv0cuVni4cVTfkChy2+GpMow9SrU6Uxi2R1C2StEH9w8Q/JNHGH5UJ42ej3otRI6Jou75oyhp5umpVuVNR8Oy1/Pz3NvDRHOWKiKchf/6lbXzkxle3dHwhczj9LQAabr1aEbtEfVGl+s9Znq2SlXMqGm8A373KGs85PE7SBvXD09E8Ulnjqp3HFTWgQVSeCnevlfm9Hf+QWiPn+cIAzW491r3fyH+m+GjO00UBQvBo7eLTSnwajy8czcNLatDsyYstsof60kp8Go1DqfWf1PkLQZsoz9L0y9mg2RPVGL1kfm/5/E5BtkvW/4nw6XrupQAKnxwZfAr9n1bPNxXio2kXAqj35LIunMo/VHv+F57t6fiKeXg61Yznmk/yaELzR08rm9Gb1Bfln6rmRZU1vfipaib/VDWOZ1KegS85XlykM7rPeKj3LKoGtPg0+WfEmVQa1j2vSlIrT9KGzx8Egn/Ioo2udWzjsbHy5K/vAO2CQ7vXzWhTjecPtuv/UF7X2p0zmg8WKxdSq/I7+4eM1zUOQY3HF9WjwZXn6SfCp+Hzc/PHF4nmjcczhfPrI1LYpAt0fHVVxlfh/nvJOR+n5FhQGc+Iso0M86N/hjEWXG/Nwi4Un2hy5KRpml/HLDIfLtOv0jnMTz3R+6PvupfThZTGlO2/l0p6Cv8wcV4NcKz3yC5ZChd3hoTF+S3WV3PwQZ07PNd44JIk+YsXx5WxyBc638T230m4HCs3H82Tzv2U3rVSRKeH88OkutDsfJOGz8kDR0Mt3MAVATQLROfkNXxOHhgaqQgAgY0bBuFp6D/GI0/9YDxXi47jo2gev6dxPIUvFC43muPJdcEEUUWAQkk1KqkjSNrkfEr5akei6ni06b+WLZuhcPhiGLR7Fu0CKO7CueuLVviHaVPw5W3eYlAfLl/0tNE7of9c93xc2WpZbArol6eZ+/d1Owj5vcX7QehCvv6ku1B6Pq5Qf9Tqi9q0vig5X+mW8JJyRGb0Vq65eh+WP0dPhoLe6PNgWdkumEIXnLwuyNYX5VA4w/zlsQnC0T/fJAuCFlA4vvq0QGbRu6oLFzvfVO3/RM4HNQWu8c9LX+l4La86gx8PXwynpAv/g/6hiA8+hejsbucDpadjdXA64Xz8fWe6nsqkcI799ybxVzy+uplQ+nD32FtKq5EfDBb3D3tHpQuN9t8z9UXPTZYJrdXdzWgxCMtB8sPZYH3/fXdABjNd+/MsVLX+o7T/rvRV2p7hHbbvLz+Gk8kszEz9Ydgbja5fH6e7g5PtQnZTIKcLraz/nMk/zDcFGr7P2G4300y1yc/pZrVHxqrC4pzaP/w/v4yVQelhI5AAAAAASUVORK5CYII=',
        }}
        style={styles.productImage}
      />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        {/* <Text style={styles.productPrice}>${item.price.toFixed(2)} <Text style={styles.productPriceText}>per item</Text></Text> */}
      </View>
    </View>
  );
};

function Home({navigation}) {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const renderProductItem = ({item}) => <ProductCard item={item} />;
  return (
    <View style={styles.container}>
      <Header
        leftComponent={{
          icon: 'menu',
          color: '#FFF',
          onPress: () => toggleOverlay(),
        }}
        centerComponent={{text: 'MY TITLE', style: {color: '#FFF'}}}
        rightComponent={{icon: 'login', color: '#FFF'}}
        containerStyle={{
          backgroundColor: '#00008B',
          // justifyContent: 'space-around',
          alignItems: 'center',
          height: 90,
        }}
        statusBarProps={{barStyle: 'black'}}
      />
      <View>
        <Overlay
          isVisible={visible}
          onBackdropPress={toggleOverlay}
          overlayStyle={{width: WIDTH - 150, height: HEIGHT / 2, flex: 1,right:80}}>
          {/* <View>
            <Text>Hello from Overlay!</Text>
          </View> */}
          <SideBar/>
        </Overlay>
      </View>

      <SearchBar
        placeholder="Type Here..."
        containerStyle={{
          backgroundColor: '#FAF0E6',
          borderColor: '#FAF0E6',
        }}
        inputContainerStyle={{backgroundColor: '#fff', borderRadius: 25}}
      />
      <FlatList
        data={Data}
        style={styles.productList}
        renderItem={renderProductItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{paddingHorizontal: 16, paddingBottom: 100}}
      />
      {/* <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity> */}
    </View>
  );
}

export default Home;
