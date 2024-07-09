//sticky
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const defaultLogo = document.getElementById('defaultLogo');
    const stickyLogo = document.getElementById('stickyLogo');
    const bgchange = document.getElementById('bgchange');
    const download = document.getElementById('download');
    const menutoggle = document.getElementById('menu-toggle');
    const svg = document.getElementById('svg');
 
    if (window.scrollY > 5) {
        navbar.classList.add('bg-white');
        navbar.classList.add('fixed-top');
        navbar.classList.remove('bg-[#2042B6]');
         bgchange.classList.add('bg-[#f3f3f3]','py-2', 'rounded-lg');
        defaultLogo.classList.remove('block');
        defaultLogo.classList.add('hidden');
        stickyLogo.classList.remove('hidden');
         stickyLogo.classList.add('block');   // #AFCD80 
         download.classList.remove('text-[#ffffff]');
        download.classList.add('border-[#115CD9]','text-[#191618]');
        menutoggle.classList.add('text-[#191618]');
        menutoggle.classList.remove('text-white');
       
    } else {
        navbar.classList.remove('bg-white');
        navbar.classList.add('bg-[#2042B6]');
        navbar.classList.remove('fixed-top');
        stickyLogo.classList.remove('block');
        stickyLogo.classList.add('hidden');
        defaultLogo.classList.remove('hidden');
        defaultLogo.classList.add('block');
        bgchange.classList.remove('bg-[#f3f3f3]' ,'py-2', 'rounded-lg');
        download.classList.add('text-[#ffffff]');
        download.classList.remove('border-[#115CD9]');
        menutoggle.classList.remove('text-[#191618]');
        menutoggle.classList.add('text-white');
    }

  });
//menu toggle 
function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
  }
  
  document.getElementById('menu-toggle').addEventListener('click', toggleMenu);
  document.getElementById('cross-toggle').addEventListener('click', toggleMenu);



//for slider 



document.addEventListener('DOMContentLoaded', function () {
    new Splide('#main-slider', {
        type   : 'loop',
        perPage: 1,
        perMove: 1,
        pagination: true,
        arrows: true,
    }).mount();
});


//chart js

const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [
                    {
                        label: 'WPPOOL',
                        data: [0,2,70,15,30,45,75,70, 60, 20, 30, 40, 50, 60, 70 ,80,90,100],
                        borderColor: '#FC714D',
                        borderWidth: 1,
                        backgroundColor: '#FC714D'
                    },
                    {
                        label: 'Google',
                        data: [0,60,20.7,25,60, 16,70,30,80,75, 22, 15.7, 45, 55, 65,75,85,96,100],
                        borderColor: '#615DE3',
                        borderWidth: 1,
                        
                        backgroundColor: '#615DE3'
                    },
                    {
                        label: 'Microsoft',
                        data: [0,20,60,50, 80,30, 40, 50, 60, 70, 80],
                        borderColor: '#AFCD80',
                        borderWidth: 1,
                        
                        backgroundColor: '#AFCD80'
                    },
                    {
                        label: 'Twitter',
                        data: [0 ,5, 13,7,18,20, 23, 33, 43, 53, 63],
                        borderWidth: 1,
                        borderColor: '#6F34A1',
                        backgroundColor: '#6F34A1'}
                ]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        beginAtZero: true
                    },
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    }
                }
            }
        });

        // slider
    
       let scrollContainer = document.querySelector('.gallery')
       let nexBtn=document.getElementById('next')
       let prevBtn=document.getElementById('prev')
       scrollContainer.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        scrollContainer.scrollLeft +=evt.deltaY
         scrollContainer.style.scrollBehavior = 'auto'
       })
       nexBtn.addEventListener('click',()=>{
        scrollContainer.style.scrollBehavior = 'smooth'
        scrollContainer.scrollLeft+=900
       })
       prevBtn.addEventListener('click',()=>{
        scrollContainer.style.scrollBehavior = 'smooth'
        scrollContainer.scrollLeft-=900
       })