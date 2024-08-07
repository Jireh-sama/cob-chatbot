# What's New

# [1.9.0](https://github.com/Jireh-sama/cob-chatbot/compare/1.8.0...1.9.0) (2024-05-08)

### Bug Fixes

- faq question appearing in text field once clicked ([7b73745](https://github.com/Jireh-sama/cob-chatbot/commit/7b737454e52c5bcc0c568fd8d6fc784f90bbf354))
- scrollInto func is not defined ([19726e9](https://github.com/Jireh-sama/cob-chatbot/commit/19726e94ba23b3032bb94d3a56f204cebe8425e5))
- vite incompatibility to named function export ([b56e7cc](https://github.com/Jireh-sama/cob-chatbot/commit/b56e7cc19dbcba44a30967a1959ac407ada0e071))
- wrong argument passed in the getFirebaseConfig call ([0a8859c](https://github.com/Jireh-sama/cob-chatbot/commit/0a8859c0ff9a97dea4e8744e35e82aaadeabd531))

### Features

- add min height to suggested questions carousel ([60fee2f](https://github.com/Jireh-sama/cob-chatbot/commit/60fee2fb2ae16a98c482d18818c75ba0ed9c7dfc))
- add missing interactive word in bot desc. ([ca3f49b](https://github.com/Jireh-sama/cob-chatbot/commit/ca3f49b89c42e61775375b85a32869eb97868aec))
- add new color palette to chat ([6126ae3](https://github.com/Jireh-sama/cob-chatbot/commit/6126ae3cee22abedc88cef3033b5e360031e95bf))
- add new highlight color for links in dark mode ([40b852c](https://github.com/Jireh-sama/cob-chatbot/commit/40b852c571a48a7116837fa058b91821def5d587))
- add new messages for sample chat ui preview ([627d2a1](https://github.com/Jireh-sama/cob-chatbot/commit/627d2a1cabd3633fbb4c2a68c19b340697683caa))
- add new styling to bot message bg and timestamp ([f58ce80](https://github.com/Jireh-sama/cob-chatbot/commit/f58ce809b6466fa37e4d2b62c6ec9aa58c74b325))
- add new ui component ([7276de6](https://github.com/Jireh-sama/cob-chatbot/commit/7276de6a62fd9164750a5dd98a6f57cac39ebbc5))
- add skeleton screen to chat box ([#30](https://github.com/Jireh-sama/cob-chatbot/issues/30)) ([8cec54d](https://github.com/Jireh-sama/cob-chatbot/commit/8cec54d1568d09d261c69603d00df2769eff2051))
- add suggested messages to chat box ([2748a0b](https://github.com/Jireh-sama/cob-chatbot/commit/2748a0bfba2c34efadc80c773ff4887ee7850707))
- add user authentication on app render ([cd65b6a](https://github.com/Jireh-sama/cob-chatbot/commit/cd65b6a0e9b3cc48b135942d178eab493a06a04e))
- error message will dissapear once the error is gone ([bfe5a54](https://github.com/Jireh-sama/cob-chatbot/commit/bfe5a54a4bab8fd67fec65a637631624720e96af))
- new message to sample chat in ui components ([f8218db](https://github.com/Jireh-sama/cob-chatbot/commit/f8218db1e448192c9a53508cfa2b2bc61729b0a3))
- new ui to suggested questions ([92f161e](https://github.com/Jireh-sama/cob-chatbot/commit/92f161e2f0a15b6164abc79ae55b126688e0ea12))
- only render faqs if its not empty ([fd6986c](https://github.com/Jireh-sama/cob-chatbot/commit/fd6986c1576f6268bf7060904e77bde7b98f6100))
- update chat skeleton screen to dynamic ([2561762](https://github.com/Jireh-sama/cob-chatbot/commit/2561762bc1de6be99d1611a17d69d5febbfa8613))
- update firebase configuration setup ([8feec25](https://github.com/Jireh-sama/cob-chatbot/commit/8feec25edcfb19e06d7e2ff179b793fc838759c7))

### Performance Improvements

- immutably update messages and faqs states ([a965868](https://github.com/Jireh-sama/cob-chatbot/commit/a9658684e26d12c3e192d958ae5a151510475e4f))
- improve readability and rendering to chat ui component ([ea759fc](https://github.com/Jireh-sama/cob-chatbot/commit/ea759fce62543b138f2843f2d0fd753373c15cfd))
- improve rendering of messages to chat box ([668be2b](https://github.com/Jireh-sama/cob-chatbot/commit/668be2beddc5ca48bcd1af94fd915d70f5d7e556))
- seperate logic to ui in chat box and create custom hook ([72b1706](https://github.com/Jireh-sama/cob-chatbot/commit/72b17060a613a1a974f93a34ba6b231f06691f32))
- slight improvement to chat head toggle ([9eb478c](https://github.com/Jireh-sama/cob-chatbot/commit/9eb478ca273ec2709c991f4c7124387fc3e5c7da))

# [1.8.0](https://github.com/Jireh-sama/cob-chatbot/compare/1.7.0...1.8.0) (2024-04-22)

### Bug Fixes

- users can send whitespaces ([#21](https://github.com/Jireh-sama/cob-chatbot/issues/21)) ([2f51488](https://github.com/Jireh-sama/cob-chatbot/commit/2f51488b6794d0a0e50144dd528c9da37e92aabd))

### Features

- new preview msg and dynamic timestamp to sample chat ui component ([c4d7545](https://github.com/Jireh-sama/cob-chatbot/commit/c4d754510c7ff519bae69c02c6237485118cd7a1))

### Performance Improvements

- code split to chat box ([c89b1ce](https://github.com/Jireh-sama/cob-chatbot/commit/c89b1ce7438606e05e4c8eab4097ecb55983cf59))
- create a seperate file for bot greeting ([ce5b100](https://github.com/Jireh-sama/cob-chatbot/commit/ce5b1001bc4cac5b67caa72137cb27cb2d5a8e29))

# [1.7.0](https://github.com/Jireh-sama/cob-chatbot/compare/1.6.0...1.7.0) (2024-04-17)

### Features

- add bot greeting if convo history is empty ([e00e35c](https://github.com/Jireh-sama/cob-chatbot/commit/e00e35cdbb801f24933af329edea7a9b1a281f64))
- add cloud message in chat head ([0c35f42](https://github.com/Jireh-sama/cob-chatbot/commit/0c35f42ee7d92cd5bbf9928c92ab356716e3969b)), closes [#23](https://github.com/Jireh-sama/cob-chatbot/issues/23)
- add responsive width to chatbox and chathead ([eab13c9](https://github.com/Jireh-sama/cob-chatbot/commit/eab13c98216a9cee9936337593d29f52ba4d0bc6)), closes [#25](https://github.com/Jireh-sama/cob-chatbot/issues/25)

# [1.6.0](https://github.com/Jireh-sama/cob-chatbot/compare/1.5.0...1.6.0) (2024-04-17)

### Bug Fixes

- bot response doesn't change even in diff msg ([7175186](https://github.com/Jireh-sama/cob-chatbot/commit/7175186e7c6921ec458fdc39ac4dc142c94dca65))

### Features

- add DepartmentBtn to bot button components ([52d1bce](https://github.com/Jireh-sama/cob-chatbot/commit/52d1bce844efbe423b93658064e0f61cd22e049b))
- add new backdrop blur property ([af61f1c](https://github.com/Jireh-sama/cob-chatbot/commit/af61f1c33621e3f6fdfa24f38d1da9c49aa06cb3))
- add new temporary data for departments ([ef653a7](https://github.com/Jireh-sama/cob-chatbot/commit/ef653a72df872a9e793cfacb7c0befbaea6db8f4))
- add new transition timing function to all ([921c53b](https://github.com/Jireh-sama/cob-chatbot/commit/921c53b6bc4caaff306ef5dd3bc7679f63ec9f5f))
- add new type of responses and new ui ([c9e9bdf](https://github.com/Jireh-sama/cob-chatbot/commit/c9e9bdf8ee2a46eb50822f7cd4850b42c7c072e1))
- add utility to split link in bot response ([d21eb96](https://github.com/Jireh-sama/cob-chatbot/commit/d21eb9693ceab497394b65293fe6ba90a9acb20b))
- add whitespace pre line to chatbot descript. ([7bf2778](https://github.com/Jireh-sama/cob-chatbot/commit/7bf27780fd83ee531dd71979ad8ed0e2f5098ccf))
- new settings button icon in chat box ([226ab87](https://github.com/Jireh-sama/cob-chatbot/commit/226ab879ee3edcb12ed2971bb076b2848c4b2f28))
- new ui to suggested questions ([ebb06d2](https://github.com/Jireh-sama/cob-chatbot/commit/ebb06d233f629c83155d90b4b7ba5059b8f11df1))
- re position loading ui component ([ffd7e51](https://github.com/Jireh-sama/cob-chatbot/commit/ffd7e515930b016760d78396d2f549dfb5b3391a))
- set user select none to screen dimmer text ([eefa46c](https://github.com/Jireh-sama/cob-chatbot/commit/eefa46cfe21be9586151a4799585e6129ce2f23a))

### Performance Improvements

- add better loading state for messages ([cf3c804](https://github.com/Jireh-sama/cob-chatbot/commit/cf3c804ec5cfd49885c8497cf2b15d1715fabf61))
- add removeEventListener when component changed ([439ccc1](https://github.com/Jireh-sama/cob-chatbot/commit/439ccc194b82c848b535c3cc8030b98afc5b59df))
- create a seperate function for split message ([cc9d0b2](https://github.com/Jireh-sama/cob-chatbot/commit/cc9d0b2412b5981c1051e05293c00efe4a8bb669))

# [1.5.0](https://github.com/Jireh-sama/cob-chatbot/compare/1.4.0...1.5.0) (2024-04-13)

### Bug Fixes

- can send an empty string of message ([846fdb1](https://github.com/Jireh-sama/cob-chatbot/commit/846fdb10329bb17380a0dd63f8548941069e71e0))

### Features

- add chat head and chat box animation ([c58a609](https://github.com/Jireh-sama/cob-chatbot/commit/c58a6098a9acbdc05a46451851a15ab46f5bf4c0)), closes [#11](https://github.com/Jireh-sama/cob-chatbot/issues/11)
- add close chat button to chat box ([0e4ab37](https://github.com/Jireh-sama/cob-chatbot/commit/0e4ab37ce90479b07d148df4d0875e8e5c765533))
- add delay to multiple messages by @Jireh-sama ([2f9f8d8](https://github.com/Jireh-sama/cob-chatbot/commit/2f9f8d872cc232db24fea596ffe82e6f76b03ed7))
- add enter key to send message ([3fafe6e](https://github.com/Jireh-sama/cob-chatbot/commit/3fafe6ea7f4652fe12cc7b8106776d1c5d6a47a8))
- add internet provider ([276016e](https://github.com/Jireh-sama/cob-chatbot/commit/276016e055b2a6b2c3d81fbc309afae4c4e269ed))
- add new messages to compare in deptMessage ([71de53e](https://github.com/Jireh-sama/cob-chatbot/commit/71de53e1da8893833c1b361cedeca986482ecb67))
- add new temporary styling to chat component ([2db228c](https://github.com/Jireh-sama/cob-chatbot/commit/2db228c9c824a90ed389e9f6b6659cbfe383959f))
- add padding to screen dimmer ([c562eb6](https://github.com/Jireh-sama/cob-chatbot/commit/c562eb61693ba4fb3d86b255e510d753c98f884a))
- add styling to scrollbars in chat box ([a9bed6a](https://github.com/Jireh-sama/cob-chatbot/commit/a9bed6a91871b5f3155b4ea56b3bd8b48e039602))
- add text splitting to bot message ([c2f6247](https://github.com/Jireh-sama/cob-chatbot/commit/c2f62475df4d1014b12ed6066eea71c667f522d2))
- new dynamic message to error ui component ([154d5bd](https://github.com/Jireh-sama/cob-chatbot/commit/154d5bd532365f610633f87805a7f3c7efef287b))
- temporary features for handling departments ([1749d66](https://github.com/Jireh-sama/cob-chatbot/commit/1749d6624c95b24554da33c721f91ea881c3b4fc))

### Performance Improvements

- remove unused styling to chat head ([212a5e5](https://github.com/Jireh-sama/cob-chatbot/commit/212a5e587a1de03e288e453b2193b9e43132b84e))

# [1.4.0](https://github.com/Jireh-sama/cob-chatbot/compare/1.3.0...1.4.0) (2024-04-11)

### Bug Fixes

- dark mode only render on settings btn click ([39fa05f](https://github.com/Jireh-sama/cob-chatbot/commit/39fa05f32cba027e13d60285fd7ed89bacb11cfe))

### Features

- add back button component ([827bbbb](https://github.com/Jireh-sama/cob-chatbot/commit/827bbbb983bc5b2d2b4cae8bf0266270a42e1174))
- add bot property to colors ([b95acea](https://github.com/Jireh-sama/cob-chatbot/commit/b95aceaed006a165c758d204b0585121cdd16789))
- add error handling ui component ([c3ee07f](https://github.com/Jireh-sama/cob-chatbot/commit/c3ee07faaa7059e179a7b0969c64844288063ae5))
- add font size switch btn component ([c896b01](https://github.com/Jireh-sama/cob-chatbot/commit/c896b0173cd84d71dccfffb360aecb3ed6a2fd5c))
- add font size switch btn to message box ([4c7b759](https://github.com/Jireh-sama/cob-chatbot/commit/4c7b759143d41834e560edad02305d58b91ac685))
- add mini profile component ([309b64e](https://github.com/Jireh-sama/cob-chatbot/commit/309b64ea629055c58444cbb128ebff85b5479f7e))
- add nick name and description to chatbot lib ([b8eaa5d](https://github.com/Jireh-sama/cob-chatbot/commit/b8eaa5dc21cd41cab402c8062d59fac984827e7c))
- add persistence for the size of chat box ([667acc2](https://github.com/Jireh-sama/cob-chatbot/commit/667acc2847f26a67fc1cd139a273d94ca53ddd8e))
- add sample user and bot chat ui component ([41dc841](https://github.com/Jireh-sama/cob-chatbot/commit/41dc84104b88fc7729ee35210e3852f9ff754004))
- add settings and dark mode theme ([3472313](https://github.com/Jireh-sama/cob-chatbot/commit/34723130f93131f148a90bfeca5de61f42ce2c89))
- add smooth transition for screen dimmer ([c4978bc](https://github.com/Jireh-sama/cob-chatbot/commit/c4978bc4dc4ee767dd3f3918963495c2613223d0))
- add themes and font size providers ([5b9d725](https://github.com/Jireh-sama/cob-chatbot/commit/5b9d7257de5c35ec1d42b928bf830669deeeeb2d))
- add uid to handle unique convo per user ([f949e14](https://github.com/Jireh-sama/cob-chatbot/commit/f949e145752ec8340f4712e14093562f5885667d)), closes [#19](https://github.com/Jireh-sama/cob-chatbot/issues/19)

### Performance Improvements

- add font size context to chat component ([65e7b52](https://github.com/Jireh-sama/cob-chatbot/commit/65e7b521e836bec1fbe83e83ab0edd0cd898dbd3))
- add providers to app ([33bdce7](https://github.com/Jireh-sama/cob-chatbot/commit/33bdce7a9a4a99afda71b6bf43e3447c88d3bfba))
- move toggleTheme fn and add themes context ([545223d](https://github.com/Jireh-sama/cob-chatbot/commit/545223dfe301e4c1d0df6bce9d50303ebde279c1))

# [1.3.0](https://github.com/Jireh-sama/cob-chatbot/compare/1.2.1...1.3.0) (2024-04-05)

### Features

- add animated chatbot mascot ([5cc8364](https://github.com/Jireh-sama/cob-chatbot/commit/5cc8364989e75e53c1700e92fbc9eb8c41b9a0ab)), closes [#5](https://github.com/Jireh-sama/cob-chatbot/issues/5)
- add error handling to MesssageBox component ([efd4423](https://github.com/Jireh-sama/cob-chatbot/commit/efd442330c76d4202548c533c737653881908748))
- add FAQs based suggested questions to msg ui ([7b92909](https://github.com/Jireh-sama/cob-chatbot/commit/7b929095c98cfcfb1a5caad64ee531e00e38a892)), closes [#13](https://github.com/Jireh-sama/cob-chatbot/issues/13) [#12](https://github.com/Jireh-sama/cob-chatbot/issues/12)
- add global transitions ([c849b74](https://github.com/Jireh-sama/cob-chatbot/commit/c849b74dbd82da5b462d6533a7975390ff4aa6a0))
- add new btn component for suggested question ([c4a4fc1](https://github.com/Jireh-sama/cob-chatbot/commit/c4a4fc1ed225ad344e95898815488518597fcc44))
- add new button component for maximizing ([44fa2eb](https://github.com/Jireh-sama/cob-chatbot/commit/44fa2eb2937dc7a0069b9d2e166f3adb75f2b3d5))
- add new styling to chat common component ([cbe0300](https://github.com/Jireh-sama/cob-chatbot/commit/cbe0300ae3cb8c2ebf44db31a2ed9af570436ddc))
- add new utility function for scrollIntoView ([dae8123](https://github.com/Jireh-sama/cob-chatbot/commit/dae8123a513b025edb03a744ee2e7f060a527b54))
- new name for chatbot ([e48f019](https://github.com/Jireh-sama/cob-chatbot/commit/e48f019c52f6dc70bc97dd51cf109511e2f3cb7e))

### Performance Improvements

- move new toggle chat function to app ([6d53762](https://github.com/Jireh-sama/cob-chatbot/commit/6d53762d87e069495c4e7f52294dd7da5e4614cd))
- update toggle function for chat head ([f17cb7a](https://github.com/Jireh-sama/cob-chatbot/commit/f17cb7af7b262f17639115d2b596475da7202acf))

## [1.2.1](https://github.com/Jireh-sama/cob-chatbot/compare/1.2.0...1.2.1) (2024-04-01)

### Bug Fixes

- chathead ref is null type error ([c080bc2](https://github.com/Jireh-sama/cob-chatbot/commit/c080bc21ee6c9ac4747daa1d85bb58d2281f04d9))

# [1.2.0](https://github.com/Jireh-sama/cob-chatbot/compare/1.1.0...1.2.0) (2024-04-01)

### Bug Fixes

- anchor tag nesting that gives warning ([05f08e8](https://github.com/Jireh-sama/cob-chatbot/commit/05f08e8bc2a6b7a3b9a6370b0a20851e64ce0ee5))

### Features

- add articles components ([2a42f51](https://github.com/Jireh-sama/cob-chatbot/commit/2a42f51875bf6353378b5a44d30055e8120faff2))
- add chatbot details object to use around ([6925a21](https://github.com/Jireh-sama/cob-chatbot/commit/6925a219bfecfa917c9ac8ba33a782a3036a6d5c))
- add footer ([0038ca3](https://github.com/Jireh-sama/cob-chatbot/commit/0038ca3ba9161ea9727425a0bd7b11ae44bdbf25))
- add highlight title ui component ([7c50dff](https://github.com/Jireh-sama/cob-chatbot/commit/7c50dff737cd70211d57c751bad3b675295b1ed0))
- add image assets ([6a93258](https://github.com/Jireh-sama/cob-chatbot/commit/6a932589e48770c09518673f1ae098b9c163c350))
- add loading ui component ([12deb90](https://github.com/Jireh-sama/cob-chatbot/commit/12deb90baeaa2142af411f2ec4e3b7a830f20872))
- add logo ui component ([f803ae4](https://github.com/Jireh-sama/cob-chatbot/commit/f803ae407423fbbff65f247d002d4fdf4af41807))
- add main header ([8677135](https://github.com/Jireh-sama/cob-chatbot/commit/867713573e680120fe95cd1825c47894571109ac))
- add new assets ([92f42d0](https://github.com/Jireh-sama/cob-chatbot/commit/92f42d049e9862c0572ebc0c436a1cc237d44b22))
- add new color for footer ([7911639](https://github.com/Jireh-sama/cob-chatbot/commit/791163919c50efd9eb74d6777c9519600acbdd3d))
- add new custom styling to tailwind config ([1cc61c8](https://github.com/Jireh-sama/cob-chatbot/commit/1cc61c8348f36dc7424e73e4b5e279fea1568906))
- add new functionality to chat in message box ([c83c9b2](https://github.com/Jireh-sama/cob-chatbot/commit/c83c9b25449407d34e49da4f331514ac955b488f)), closes [#17](https://github.com/Jireh-sama/cob-chatbot/issues/17)
- add new styling to footer ([c953e32](https://github.com/Jireh-sama/cob-chatbot/commit/c953e3292f8c25f98fda64622f4d658722b84b32))
- add new styling to globals ([f5c77a7](https://github.com/Jireh-sama/cob-chatbot/commit/f5c77a72c0d6b4e584ce13511b4de34d24ad6066))
- add new styling to typing ui component ([e6f019b](https://github.com/Jireh-sama/cob-chatbot/commit/e6f019bc1dc0180b80acb31d772a4aeccdb536d9))
- add sleep utility ([1a7a89d](https://github.com/Jireh-sama/cob-chatbot/commit/1a7a89d7131754e47653047efecb67effb3b0eb9))
- add temporary logo for chatbot ([b8b39e9](https://github.com/Jireh-sama/cob-chatbot/commit/b8b39e9d883f3247c8df8c399f3cdd323c49a864))
- add time header ([670079b](https://github.com/Jireh-sama/cob-chatbot/commit/670079b7e8838066f74156427ec8722d53492690))
- add typing ui component ([fbfce32](https://github.com/Jireh-sama/cob-chatbot/commit/fbfce327fa2676aada30b885ce22a99f4aa9c798))
- add utility to format and display time ([198c15e](https://github.com/Jireh-sama/cob-chatbot/commit/198c15eea166d6cde72f277481130c6e4e9c12ef))
- auto center logo component ([08ffa27](https://github.com/Jireh-sama/cob-chatbot/commit/08ffa27a39f82867c736603fc261ca4d85f41926))
- city hall landing page replica ([5a2aa5b](https://github.com/Jireh-sama/cob-chatbot/commit/5a2aa5be06630fde6e314a274eaecfb4cc14341b)), closes [#16](https://github.com/Jireh-sama/cob-chatbot/issues/16)
- hide scroll bar y axis in message box ([2292e0c](https://github.com/Jireh-sama/cob-chatbot/commit/2292e0c692dee0985c138b7c27267c3ac6814eb4))
- lower the margin top of chat component ([debb868](https://github.com/Jireh-sama/cob-chatbot/commit/debb868718d3e9896c06875d4fa1550d2706956b))
- new dynamic section component ([6dfc9c4](https://github.com/Jireh-sama/cob-chatbot/commit/6dfc9c4e83161cbf5b8455f669354655580fa8e2))
- new styling to dropdown component ([24a6a14](https://github.com/Jireh-sama/cob-chatbot/commit/24a6a144dd53a7a2acda66abde2aafb2868f58f4))
- new ui for chat component ([fd86a48](https://github.com/Jireh-sama/cob-chatbot/commit/fd86a484c234be72025a12858813546fb9b303b4))
- new website title ([91b2884](https://github.com/Jireh-sama/cob-chatbot/commit/91b2884d3738196cdf72e4d622ec3346a345c893))
- remove ping for temporary ([343710f](https://github.com/Jireh-sama/cob-chatbot/commit/343710f747131b3f13c8465f037bb515d738bb0b))
- set background to fixed ([ba7fda7](https://github.com/Jireh-sama/cob-chatbot/commit/ba7fda7deb32354096db833a8188695fb30bc821))

# 1.1.0 (2024-03-15)

### Features

- add dummy page component ([60ae9ed](https://github.com/Jireh-sama/cob-chatbot/commit/60ae9ed6afd78d5c876029c553459edfc841f272))
- add new ui for chat component ([adfa1f2](https://github.com/Jireh-sama/cob-chatbot/commit/adfa1f21bb597a8d00e4ffd36f4f4d413bf66316))
- send message and get replies from chatbot ([27ba835](https://github.com/Jireh-sama/cob-chatbot/commit/27ba835fb8383a2b89dc02b2bedcf724d54e2775))

# Changelog

## 1.0.0 (2024-03-07)

### ⚠ BREAKING CHANGES

- add basic view for cob chatbot to work on

### Features

- add basic view for cob chatbot to work on ([9443de5](https://github.com/MoonbamiOfficial/cob-chatbot/commit/9443de5729fadef53386be1a6a211a59ea85e851))
