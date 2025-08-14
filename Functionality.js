const firstButton = document.getElementById('btn1').addEventListener('click', button1);
    const secondButton = document.getElementById('btn2').addEventListener('click', button2);
    const thirdButton = document.getElementById('btn3').addEventListener('click', button3);
    const fourthButton = document.getElementById('btn4').addEventListener('click', button4);
    const paraTop = document.querySelector('.def-One');
    const paraBottom = document.querySelector('.def-Two');
    const paraCenter = document.querySelector('.def-Inside');

window.onload = function() {
            paraTop.textContent = "The cat (Felis catus), also referred to as the domestic cat or house cat, is a small domesticated carnivorous mammal.";
            paraCenter.textContent = "Domestic cats may be called \"house cats\" when kept as indoor pets. They are one of the most popular pets in the world.";
            paraBottom.textContent = "Cat intelligence is evident in their ability to adapt, learn through observation, and solve problems. Research has shown they possess strong memories, exhibit neuroplasticity, and display cognitive skills comparable to those of a young child. Cat communication includes meowing, purring, trilling, hissing, growling, grunting, and body language. It can hear sounds too faint or too high in frequency for human ears, such as those made by small mammals. It secretes and perceives pheromones.";
        };
function button1() {
        paraTop.textContent = "The cat (Felis catus), also referred to as the domestic cat or house cat, is a small domesticated carnivorous mammal.";
        paraCenter.textContent = "Domestic cats may be called \"house cats\" when kept as indoor pets. They are one of the most popular pets in the world.";
        paraBottom.textContent = "Cat intelligence is evident in their ability to adapt, learn through observation, and solve problems. Research has shown they possess strong memories, exhibit neuroplasticity, and display cognitive skills comparable to those of a young child. Cat communication includes meowing, purring, trilling, hissing, growling, grunting, and body language. It can hear sounds too faint or too high in frequency for human ears, such as those made by small mammals. It secretes and perceives pheromones.";
}
function button2() {
        paraTop.textContent = "The dog (Canis familiaris or Canis lupus familiaris) is a domesticated descendant of the gray wolf.";
        paraBottom.textContent = "Dogs have been bred for desired behaviors, sensory capabilities, and physical attributes. Dog breeds vary widely in shape, size, and color. They have the same number of bones (with the exception of the tail), powerful jaws that house around 42 teeth, and well-developed senses of smell, hearing, and sight. Compared to humans, dogs possess a superior sense of smell and hearing, but inferior visual acuity.";
        paraCenter.textContent = "Dogs are mammals, usually to be kept as pets, or work on farms or for the police. Some dogs are trained to be rescue dogs and join teams such as mountain rescue.";
}
function button3() {
        paraTop.textContent = "Birds are a group of warm-blooded vertebrates constituting the class Aves, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton.";
        paraCenter.textContent = "Birds live all over the world. They range in size from the 5 cm (2 in) bee hummingbird to the 2.70 m (9 ft) ostrich. There are about ten thousand species of birds. More than half of these are passerines, or perching birds.";
        paraBottom.textContent = "Wings evolved from the forelimbs of birds. They give birds the ability to fly. Over time, many groups of birds evolved with smaller wings. These include ratites, penguins and many island species of birds.";
}
function button4() {
        paraTop.textContent = "Amphibians are members of the class Amphibia. The living ones are frogs (including toads), salamanders (including newts) and caecilians. They are four-legged vertebrates which are cold blooded.";
        paraCenter.textContent = "They could also use their strong fins to hoist themselves out of the water and onto dry land if necessary.";
        paraBottom.textContent = "Amphibians lay their eggs in water, usually in a foam nest. After hatching they are tadpoles, which live in the water and have gills. The tadpoles change into adults in a process called metamorphosis. When they are adult, they have lungs to breathe instead of gills, and legs. Adult amphibians also use their skin to take in oxygen, and some species of salamanders do not have lungs.";
}