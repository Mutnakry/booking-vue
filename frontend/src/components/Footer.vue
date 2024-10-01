<template>
  <footer class="dark:bg-gray-900 bg-neutral-700">
    <div class="mx-auto w-full max-w-screen-lg p-4 py-6 lg:py-8">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0 md:w-1/3 w-full space-y-10">
          <div>
            <a href="#" class="flex items-center">
              <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Cambodia_MapFlag.png"
                class="h-10"
                alt="FlowBite Logo"
              />
            </a>
          </div>
          <div>
            <a
              href="#"
              class="text-3xl text-white underline whitespace-nowrap underline-offset-8"
              >ប​ណ្តា​ញ​សង្គម</a
            >
          </div>
          <div class="flex space-x-2">
            <a href="#">
              <img
                src="data:image/png;base64,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"
                class="h-8 w-8 me-3"
                alt="FlowBite Logo"
              />
            </a>
            <a href="#">
              <img
                src="https://www.jtexpresskh.com/img/lingying.2713ef18.png"
                class="h-8 w-8 me-3"
                alt="FlowBite Logo"
              />
            </a>
            <a href="#">
              <img
                src="data:image/png;base64,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"
                class="h-8 w-8 me-3"
                alt="FlowBite Logo"
              />
            </a>
            <a href="#">
              <img
                src="data:image/png;base64,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"
                class="h-8 w-8 me-3"
                alt="FlowBite Logo"
              />
            </a>
            <a href="#">
              <img
                src="data:image/png;base64,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"
                class="h-8 w-8 me-3"
                alt="FlowBite Logo"
              />
            </a>
          </div>
        </div>
        <div class="md:w-2/3 w-full">
          <div class="grid grid-cols-1 space-y-10">
            <div class="md:mt-10 mt-0">
              <!-- <ul
                class="text-white font-medium space-x-8 flex whitespace-nowrap"
              >
                <li class="mb-4 hover:scale-105 duration-500">
                  <a href="#" class="hover:underline text-md">ទំព័រដើម</a>
                </li>
                <li class="mb-4 hover:scale-105 duration-500">
                  <a href="#" class="hover:underline text-md"
                    >ដាក់ការកុម៉្មង់</a
                  >
                </li>
                <li class="mb-4 hover:scale-105 duration-500">
                  <a href="#" class="hover:underline text-md">ស្វែងរក</a>
                </li>
                <li class="mb-4 hover:scale-105 duration-500">
                  <a href="#" class="hover:underline text-md">សេវាកម្ម</a>
                </li>
                <li class="mb-4 hover:scale-105 duration-500">
                  <a href="#" class="hover:underline text-md">ព័ត៌មាន</a>
                </li>
                <li class="mb-4 hover:scale-105 duration-500">
                  <a href="#" class="hover:underline text-md">អំពីខ្ញុំ</a>
                </li>
              </ul> -->
            </div>
            <div>
              <div>
                <a
                  href="#"
                  class="text-3xl text-white underline whitespace-nowrap underline-offset-8"
                  >គេហទំព័រ​ផ្លូវការ</a
                >
              </div>
            </div>
            <div class="w-full h-auto rounded-lg bg-neutral-900">
              <div class="flex flex-wrap gap-2">
                <a href="#" class="p-4 hover:bg-neutral-600 rounded-lg">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/640px-Flag_of_Cambodia.svg.png"
                    alt=""
                    class="h-8 rounded-full w-8"
                  />
                </a>
                <a href="#" class="p-4 hover:bg-neutral-600 rounded-lg">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAABR1JREFUWEfdWVtsFFUY/v657HQLoRfUBrW3gJ21Jjxo0jY+CKhRg8FEUiTx3WBERRGIJlQjEGOAqqgYic+SYBtIJBIlCtQHpRhNNLHZXSC9qU1VepN22d2ZOebM7rbdbXfPmd3BpJ5kX3a+859v/vn+yzmHUMJgjNHlexpbYNuPO8BqALfP+3HLf2R+CnAVqvrFXb/2XyIiVuyyVMzESFPdQ4ywBcATYGyVJxtEIwA+J4YuMzr0jae5ADwRjjQ3tsCyDjHgAa8LLYYn4Fto2m6zr/+SrD0pwv2hhoY4cw6CMe5V/wdRl0HKnsbwwIDIuJBw2Kx/EHC6wFAtMlbSc8IYoGwJRQbPFbJTkHCkqf45Rs4RMGglkZGdTLCIKTvM6OBH+abkJRxpqj3MgFdk1/ITR0CnGR3elUf3C/92PQvnqJ8kvNoiKNsX8/QCD6c1+9V/JoP8394ClEdzNZ1FOJUN7B9veoDJupswZpB63/zskUU4bNZ1gbF2WXv5cNqqVCGzRoRJSLwUUXcoMjSbTmct8qLALKtXbEGMWLbVckHTJ/xJLqRprZniMke4qbbHrwp2y9GES/jv7QHx28kgCD2hyPB6DnUJu70B2Ncyc0UY9VaG207EXdifWw3Yf/kgC5coPcx7D9da2Kz7GIxtE5GReV6+2UbF80kXOvmhjpmTqsw0MYboWCgy9CzxFjESqv/dc9eVZ4mV7yUQWOu4TxO/KLj2kl+yoBEzPHgHXb67oc227e/FryhGKFUMNd3xuR6QAaPtBpxxf2ShaGobRc3afQ5Dh5iOGFG+yUbFyyk5ZMbkuzpmTvsjC4Wwn8Jm7adgeFpMR4yoPpyAcW9KDpkR/0nB2C6/ZIHjnPB5MLgpI99QVgIVO5JQ0wUhH05vdAAl56kDJPtz/8zG2COEySM6nGsCpxAucMIRMDSJ/KcsB1bsTCC4PtuDonmi57ELCqY6A3CmRUg3t0U54X/AsFwC7kLKN9pY8YIFMoreR7p2WJww9YGGmTMe9E247pkwX0yrY6jsSEJfXZy3k1cVTOzXYQ15zB5pwlKSyP0CpAMrtiXBC4WXwQvJ1DEdLDuZyJlIS0IYdIWsGW0OqvYmQOWF12QzwPiBAOIXCwdgQSvpoCsprVEZQ82phFDTXLOjTwbAbniUwfw3IBwvuXAE19mofEPu+068qSPW4yHIctztFo5oc0OrY9kX5US0EFXZkUBwg1zwxc7zYCu+iLiluZTmhwJAzak4KJid4mLnVLefCG7IDkgW47IwwFLtsrdB6eaHzyq2vTTud1B9YG51rs/J91XEvkztNIKPWah40QbXeWaM7Q0g/l0RgZdpL7mhYhv4yleTCD6S8mLyCmF8XwD2b9lBpd7JUPV6AvqaFOnYWRUTb+vevJvbwKdIe9wiaUDNyRvgJXu6W8XUJzqQL/Z4zn4miWXtNpzrwOjmMiC17ZMa/NDQjA6v4+BZd3gNvrIWGxWvWa634r1yn9hodcC/ysRbGuI/yGcLHmxNfQPuBrnobT4PqPjPCpwxb3mVd37GWgc8Y0iNfNt8PnnJHaSkMoZ7vLo0jqoyn2hJHQbOkg7VdzLH2SmlM59BpCjvmOHBRY96/z8H2hmnLakrgwzp9KXMIT9ONhdVD1G3QcpuXy5l5i/Aiwuz7IN+HRryCkaauidTFGRCwVvWT1vkvQeApxhhk+cjLqIRYjgN4LObfrGY6wHeml5pbmxljr1R5uqWFPXMmr7+3lKubv8FuTUUfdOgAGsAAAAASUVORK5CYII="
                    alt=""
                    class="h-8 w-8"
                  />
                </a>
                <a href="#" class="p-4 hover:bg-neutral-600 rounded-lg">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                    class="h-8 w-8"
                  />
                </a>

                <a href="#" class="p-4 hover:bg-neutral-600 rounded-lg">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                    class="h-8 w-8"
                  />
                </a>
                <a href="#" class="p-4 hover:bg-neutral-600 rounded-lg">
                  <img
                    src="https://www.jtexpresskh.com/img/lingying.2713ef18.png"
                    alt=""
                    class="h-8 w-8"
                  />
                </a>
                <a href="#" class="p-4 hover:bg-neutral-600 rounded-lg">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAAypJREFUWEfVmc9LVFEUxz/3+at0Ioo2KRoIBdYuylJxG4SFkP2Aal+2sdKFUIGLaHCaKQn8E1qZCRm2LiJzImdatRUNJbJI7Ae1mBt33nvjc5yZN+/HPHoHZjXvnvN5590f536PwIs9OlnH0ud2yHSTkR0IGkHsAdRP2SpSfgFW0MQsWtUrtrcmGZn46zascDNQQjvQ33T10IHlhupOZz7EbwSTaNo4sfm3zsaCI2AJJ4AocFgFarlyMLkUqVHw7kwwj9Ruk0i9KNdBWcASmoCHwDmrY8/AprNsxrddJzb3yQ7cFljCaeAxsCPfmW/AyrFgHU27TCz1rBR0SWAJN4H7gFbIia/AOnQGxDDxtIpZ0IoCS3gA3Cj1tr4D56aIGCOeLhi7ILDUQRVwSasYcDaqNkQilcgH2AIs4QwwUWwaVGTRFU6LBO08idQT69+bgCXsBT4CO+2y68u2ZhdEiDVqq9q4935lY0OxDJJ6Zs/a+TH/r+yUMKIIMUU8rb561nIZltADPC8XNpAMmzBVWq+53VmBk8DR/xJYMEf8w/FchiUcAxyf64FMCTOD1aKL0fSbbIalfpJddJJd9exI4trM19bmXU7HuXm+obZ+drRnYFBIqAG+A/WOHS0uJmludl/8OAu4DuxWwF3Aa2djjaeDBVZBOxXwLeBuSIDvKOBp4FRIgKcV8DvgSEiAkwp4AdgXEuAFBfzT1Q6h3jD4RfcrlMChmxKhW3Sh29ZCd3CE7mgOV/Hjqbzs65v51tgYSHkZiURmo9HooFkPuyvgIbmkC4NBmJq6egFvZNn5FSk44Dlg44pkADu/hAYH3AtkNbd8XcLZNT8Y4Cl0cSdr3oSUygOvAW1ZBb8QsDE1ypeqKgssgQuGbJZb1N7EwMoCDwH2YqBl17CXWysHPFZM6rUTtAeBWFFB23/gDDBsiOgF93ZvLQN/gX8Al8ztq9hJZAtsLETVlFGfaZOy2eIf8FNgAPDelLG+6Za2l3fgFLou4m/bK//zGOJhfxPsXwaHjUV+A5PAuBsBsqwpUaKyqUMvfrqBDvR+nrV1q9q2q8CyAfcSXQf547Za+gcCGyIiz/QiwAAAAABJRU5ErkJggg=="
                    alt=""
                    class="h-8 w-8"
                  />
                </a>
                <a href="#" class="p-4 hover:bg-neutral-600 rounded-lg">
                  <img
                    src="https://www.jtexpresskh.com/img/lingying.2713ef18.png"
                    alt=""
                    class="h-8 w-8"
                  />
                </a>
                <a href="#" class="p-4 hover:bg-neutral-600 rounded-lg">
                  <img
                    alt=""
                    src="data:image/png;base64,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"
                    class="h-8 w-8"
                  />
                </a>
                <a href="#" class="p-4 hover:bg-neutral-600 rounded-lg">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAABTNJREFUWEfNmV1sVEUUx39z7350uy2FUpAiyodIophttwhSoySVkugDPAh90sSYmBhDYgAxkMCbIakJIBg/wouJib7w8SCaSEIRQwwV0LVdIgSIIFFpgRYK2/3o7r13zNwuDYW2+zG7pJP0Ybtz/ud3Z2fOOXOuQGP82dbmu3bx8jIh7RUgm5HUS8QMBHWurKRPIG8i6AHRKYV5YvaiBacXHziQLtatKMbweKhpuS2d9QjWSikDhWgIIZISedCD+UVLNPJrIbZqbkHAHaGmV8HeISVNhToaa74QRMDc1hqNHMlXLy/g46EX5tik9kjJ2nyFC5knhDho4t/YEj31by67nMA/hcJrHOl8I6E6l5jO9wJiQphvrIxGvp9IZ0LgY6HGzY6UHwOGDkwBto4hxJaV0a6d49mMC3ysoXG348iNBTgr2VQBu1vPdn8w5r4f658dDeFN0nF2lYygOKFNq852f/Kg6UMr3BEKr0M6+2WBEaQ4pvGtBEgpjLZV0T8O3T9rFPCJJUvq0xn7nJRyaqkBitETQgyYfu8zLWfO9N6zHwV8NNRwCMnrxYiXy0YIDrVGu9c9BHws1LTakfbhcjnW0RWGubq1O/LDqEx3NNTQiWS5jnC5bAWis/Vs14sjwB3hcLO0nJPlclgKXY8wm1Xt4e7hv/Z+uiuTSDaXQrhcGmYgcPLpDe9vFlJKD9APTCmFs2T/eVJ9l/BPX0Bl3XOlkLyncReoVcBqZUu6HaxUH0J4MP0lj47NCng78JHOUkgng7RSGL7h+igT+89NO96qx93PTjqG8FQgDK+OG2W7XQGrULZaR+nO1eN4gzPwT3kSO3kLy0q4cl5vFWbFNFJ3r5KJ36RmbouOG2V7WAGfApbpKN3o/horHSNYuxDhC+Lxq+MgsdODOOkk8f4LeHzVzGx4S8eNsj2lgK8A83SUXODkbUxfgPj1c9QtVuWIxcClI/hr5+FkhvAEppUC+IoCjgOVOsDXu77CGbqD4fGTTgxQM/dlF3iwN4LHW4ljpdwDOLPxbR03yjaugAeBoI5Sb2Qf0sogDDC8VVRMewpppxkavIadGgApEB4vs5re1XEzAnwZmK+j1PvblwjHwXEy1M5/BctOIdWhM73c+vtnhPCDIZj1/Hs6bpStuyW0D13P6c9ACCqmPkl1fSP9F35EGCa1C1cR642SGrjqgtYvXa8L7B6674A1Oko9p/dQObORyrpFmJ4APb/vA8OkPvwOtpUk0XeRxI0u6pdt0HEzEta0E0fsn1/wVT2Gk0liGj5ifedB2lTXLcbGBuHFSt6k+omXdIHdxKGdmlUmc6wE0hrCycSRwsCxMvgCNTiZBIbpxwhMH8mEGtRuai5J8WOnbmNbcbAt7MyguzWkEAgMTH+Nm/E0x3Dxo0S2bt26Mx6PuwXyZB3BYPBke3v75nt3Ou1t8QgeVDEOF/DZ0QmT84qkQAH3gnE/sKrYJuUlNFtNjr6EZldZNS0m1TUfUEwPX/OzwPXAOaDkV4Ui9/gA8CyoDv7wGKsZqJ5mf6HN7iKBJjJT5UhbdoVH5o3XvVSdw3FbnmWAG0tSMex+8IuJ+sOqc6id/It8OOV701i2uTrwHwLtj7KhDWyZ6NfNBaweUlVy3wJVRa5WvmYx4M1coTUfYOVwDrC3jCFPhS61/fRfyjywPK8BO4BwvsuWY14E2AaU9rXXGE5Vl1NdH1QIrCgQPpkNVZ9nU25B5vluifFE/cBSYEU2188G97Xt8Ktb6Mv+XQNUrXICOAMMFUR53+T/AVKyyBTyziMoAAAAAElFTkSuQmCC"
                    alt=""
                    class="h-8 w-8"
                  />
                </a>
                <a href="#" class="p-4 hover:bg-neutral-600 rounded-lg">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                    class="h-8 w-8"
                  />
                </a>
                <a href="#" class="p-4 hover:bg-neutral-600 rounded-lg">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAAvxJREFUWEfdmV9IU2EYxp/nbEYOsotFlEOakPNvRlGSRWV/KDAXKNlllJFXdWeg4EXQRUF215WRRZcVBpJB0f8o0aLI1NQuNGoW0S5aOCO3vbGx2ZrT7bgd2td3e773eX/nnPd85/veh0hhiAgniso2i/irBSwlpAiAVcCcoCwhHgBuAYcJGSRNt3OHB56TlIWmpd7AEGTxmkrx++uFUg+BTY8GgU8Ab9Bkup777m2PXnhdwJ8dJRU+BC5AsFEP5JxziRdmaMdXjg71JauXFPCX8vLl01PTZwg5IsE3ncZBQAS8nJWd1bKiv/9rIumEyV2FpfsDAf9VAEsTiaV4/bummQ7ZRga75tOZF9hVWNIggUC7AKYUYZIKJ+CnpjXaRoY65gqYE/ijo6gZgjNJZUr3JKIlb3T4bDzZuMDidjf5PJ7adHPo0TPn5HTSaj0fGzMLWESqANwHoOlJYMDcAIBdJB9Fa/8FLCLLALwBkGsAwEIkJwCsJfktEhwLfAvAvoUoGxjTTbJmFrCI7ADwwMDEqUjvJPkwKDDzhEXkDoA9qagaGHuX5N4ZYBFZB+CVgQnTIb2e5OvQE+5o7zxnWWLZmg5VozS8P7xPGxrrTrKq6pTZ9eGlG4LQljBjB+GxrdpgZfFq5yafT3oyFjQKzGxmJQvya1ohOK0CMMhWFuQ7uyDiVAMYXXTk1/SKoEIFYBJ9dNidYwKxKwEMjrPA7pwExKICMECvUsAEJlUriTHVPrpe9ZY15X4cyv2aldv8BNffSxdvtlksi7dk8lrs9f58dvRYbVNoP6zcBj4Mrc4RKQys1iE0DN0NoDrDajn+MT8MrFYjJao07mVIq2p3pB8Reetxm4H+8fEm7+Mndf+yNCzbt3Wa7Pa2WIb/o90auSulGtp/oBWyDCLQQVPGN/Ur2BE/bIQpA+CKOXtRc1pMmeiiN8L2gmgn8t4P9Sb7gSd0kWKFoozFg0I5oNdYBOGihIzFa4Ybi3Hhw9YtBGUgCuNZtxCMgBhIh3X7G+OVSTEqajEmAAAAAElFTkSuQmCC"
                    alt=""
                    class="h-8 w-8"
                  />
                </a>
                <a href="#" class="p-4 hover:bg-neutral-600 rounded-lg">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                    class="h-8 w-8"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
          >© 2024-9-10 <a href="#" class="hover:underline">Nakry™</a>. All
          Rights Developer.
        </span>
        <div class="flex mt-4 sm:justify-center sm:mt-0">
          <a href="#" class="text-gray-500 ms-5">
            <span class=""
              >រក្សា​រ​សិទ្ធ​គ្រប់យ៉ាងដោយ © 2024 Nakry Developer</span
            >
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>